import mongoose from "mongoose"

const ApplicationSchema = new mongoose.Schema({
    credit: {
        type: Number,
        required: true,
    },
    period: {
        type: Number,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    expenses: {
        type: Number,
        required: true,
    },
    purpose: {
        type: String,
        required: true,
    },
    percent: {
        type: Number,
        required: true,
    },
    payment: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Application', ApplicationSchema)