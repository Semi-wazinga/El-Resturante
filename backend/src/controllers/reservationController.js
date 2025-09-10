const Reservation = require('../models/Reservation')

exports.list = async (req, res, next) => {
    try{
        const reservations = await Reservation.find().sort({ createdAt: -1 });
        res.json(reservations);

    } catch (err) {
      next(err)
    }
}

exports.create = async (req, res, next) => {
    try{
       const { name, phone, date, time, guestSize } = req.body;
       if(!name || !phone || !date || !time || !guestSize){
        return res.status(400).json({error: 'name, phone, dateTime, guestSize is required'})
       }
       const data = {
        name, 
        phone,
        date,
        time, 
        guestSize,
        status: 'pending',
        customer: req.user?.id || null //optional if a logged in user books
        };
        const reservation = await Reservation.create(data)
        res.status(201).json(reservation)
    } catch (err){
      next(err)
    }
}

exports.myReservation = async(req, res, next) => {
  try {
    // req.user.id should be set by your auth middleware
    const reservations = await Reservation.find({ customer: req.user.id });
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reservations" });
    next(err)
  }
}

exports.updateStatus = async (req, res, next) => {
   try {
     const {status} = req.body // pending || confirmed || cancelled
     const reservation = await Reservation.findByIdAndUpdate(
        req.params.id, {status}, {new: true}
     );
     if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
     res.json(reservation);
   } catch (err) {
    next(err)
   }
}

exports.delete = async (req, res, next) => {
    try {
       const reservation = await Reservation.findByIdAndDelete(req.params.id);
       if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
       res.json({ message: 'Deleted' });
    } catch (err) {
        next(err)
    }
}