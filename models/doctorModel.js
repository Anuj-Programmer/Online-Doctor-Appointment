const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    feePerConsultation: {
        type: Number,
        required: true
    },
    timings: {
        type: [String],  // Array of strings to hold time slots
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
}, {
    timestamps: true
});

const Doctor = mongoose.model('doctors', doctorSchema);

module.exports = Doctor;
