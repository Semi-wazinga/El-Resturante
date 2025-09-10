const mongoose = require('mongoose')
const moment = require('moment')

const reservationSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    time: {
    type: String,
    required: true,
    validate: {
      validator: (value) => moment(value, 'HH:mm', true).isValid(),
      message: 'Invalid time format (use HH:mm)',
    },
  },
    guestSize: { type: Number, required: true, min: 1 },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},{timestamps:true})

module.exports = mongoose.model('Reservation', reservationSchema)

