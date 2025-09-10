const router = require('express').Router();
const ctrl = require('../controllers/reservationController');
const {requireAuth, requireAdmin} = require('../middleware/auth');

//public can make reservation (optionally authenticated)
router.post('/', requireAuth,ctrl.create) // add requireAuth if you only want loggedin usres to book

// admin reservation control
router.get('/my', requireAuth, ctrl.myReservation)
router.get('/', requireAuth, requireAdmin,ctrl.list);
router.put('/:id/status', requireAuth, requireAdmin, ctrl.updateStatus);
router.delete('/:id', requireAuth, requireAdmin, ctrl.delete);

module.exports = router;