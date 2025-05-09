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
    profile: {
        type: String,
        default: ""
    },
    certificate: {
        type: String,
        default: ""
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true,
        enum: ['cardiology', 'dermatology', 'neurology', 'orthopedics', 'pediatrics']
    },
    experience: {
        type: Number,
        required: true,
        min: 0
    },
    fee: {
        type: Number,
        required: true,
        min: 0
    },
    timeSlots: [{
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        }
    }],
    status: {
        type: String,
        default: 'pending'
    }
}, {
    timestamps: true
});

const Doctor = mongoose.model('doctors', doctorSchema);

module.exports = Doctor;
