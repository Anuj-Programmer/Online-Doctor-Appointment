const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctors',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    date: {
        type: String,
        required: true
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
    fee: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'cancelled', 'completed'],
        default: 'pending'
    },
    doctorInfo: {
        firstName: String,
        lastName: String,
        specialization: String,
        experience: Number,
        address: String
    },
    userInfo: {
        firstName: String,
        lastName: String,
        email: String,
    }
}, {
    timestamps: true
});

const appointmentModel = mongoose.model('appointments', appointmentSchema);

module.exports = appointmentModel;