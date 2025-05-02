const Booking = require("../models/bookingmightneedlater.model");
const Doctor = require("../models/doctorModel");
const { StatusCodes } = require("http-status-codes");

const createBooking = async (req, res) => {
    try {
        const {
            doctorId,
            visitDate,
            timeSlot,
            note,
            speciality
        } = req.body;

        if (!doctorId || !visitDate || !timeSlot || !speciality) {
            return res.status(StatusCodes.BAD_REQUEST).json({ 
                success: false,
                message: "Please fill in all required fields" 
            });
        }

        const user = req.user;
        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ 
                success: false,
                message: "Access denied. No token provided" 
            });
        }

        // Check if doctor exists and has the requested time slot
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Doctor not found"
            });
        }

        // Check if the requested time slot is available for the doctor
        const isTimeSlotValid = doctor.timeSlots.some(slot => 
            slot.startTime === timeSlot.startTime && 
            slot.endTime === timeSlot.endTime
        );

        if (!isTimeSlotValid) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Selected time slot is not available for this doctor"
            });
        }

        // Check if the slot is already booked
        const existingBooking = await Booking.findOne({
            doctorId,
            visitDate,
            'timeSlot.startTime': timeSlot.startTime,
            'timeSlot.endTime': timeSlot.endTime,
            status: { $ne: 'cancelled' }
        });

        if (existingBooking) {
            return res.status(StatusCodes.CONFLICT).json({
                success: false,
                message: "This time slot is already booked"
            });
        }

        const booking = await Booking.create({
            doctorId,
            patientId: user.id,
            visitDate,
            timeSlot,
            note,
            speciality
        });

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Appointment booked successfully",
            booking
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error creating appointment",
            error: error.message
        });
    }
};

const getMyBookings = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ 
                success: false,
                message: "Access denied. No token provided" 
            });
        }

        const bookings = await Booking.find({ patientId: user.id })
            .populate('doctorId', 'firstName lastName specialization timeSlots')
            .sort({ visitDate: 1 });

        if (bookings.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ 
                success: false,
                message: "No appointments found" 
            });
        }

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Appointments fetched successfully",
            bookings
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error fetching appointments",
            error: error.message
        });
    }
};

const getDoctorAppointments = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ 
                success: false,
                message: "Access denied. No token provided" 
            });
        }

        const appointments = await Booking.find({ doctorId: user.id })
            .populate('patientId', 'name email')
            .sort({ visitDate: 1 });

        if (appointments.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ 
                success: false,
                message: "No appointments found" 
            });
        }

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Appointments fetched successfully",
            appointments
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error fetching appointments",
            error: error.message
        });
    }
};

const updateBookingStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(StatusCodes.BAD_REQUEST).json({ 
                success: false,
                message: "Status is required" 
            });
        }

        const user = req.user;
        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ 
                success: false,
                message: "Access denied. No token provided" 
            });
        }

        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(StatusCodes.NOT_FOUND).json({ 
                success: false,
                message: "Appointment not found" 
            });
        }

        if (booking.doctorId.toString() !== user.id) {
            return res.status(StatusCodes.FORBIDDEN).json({ 
                success: false,
                message: "Access denied. You are not authorized to update this appointment" 
            });
        }

        booking.status = status;
        await booking.save();

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Appointment status updated successfully",
            booking
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error updating appointment status",
            error: error.message
        });
    }
};

const deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.user;

        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ 
                success: false,
                message: "Access denied. No token provided" 
            });
        }

        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(StatusCodes.NOT_FOUND).json({ 
                success: false,
                message: "Appointment not found" 
            });
        }

        if (booking.patientId.toString() !== user.id) {
            return res.status(StatusCodes.FORBIDDEN).json({ 
                success: false,
                message: "Access denied. You are not authorized to delete this appointment" 
            });
        }

        // Instead of deleting, mark as cancelled
        booking.status = 'cancelled';
        await booking.save();

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Appointment cancelled successfully"
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error cancelling appointment",
            error: error.message
        });
    }
};

module.exports = {
    createBooking,
    getMyBookings,
    getDoctorAppointments,
    updateBookingStatus,
    deleteBooking
}; 