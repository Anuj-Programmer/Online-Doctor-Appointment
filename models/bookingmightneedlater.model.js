const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctors',
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    visitDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value > new Date();
            },
            message: 'Visit date must be in the future'
        }
    },
    timeSlot: {
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        }
    },
    note: {
        type: String,
        default: ''
    },
    speciality: {
        type: String,
        required: true,
        enum: ['cardiology', 'dermatology', 'neurology', 'orthopedics', 'pediatrics','general']
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'cancelled', 'completed'],
        default: 'pending'
    }
}, {
    timestamps: true
});

// Add index for efficient querying
bookingSchema.index({ doctorId: 1, visitDate: 1, 'timeSlot.startTime': 1, 'timeSlot.endTime': 1 }, { unique: true });

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking; 