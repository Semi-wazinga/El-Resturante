const express = require('express')
const fs = require("fs");
const router = express.Router();
const ctrl = require('../controllers/menuController');
const multer = require('multer')
const path = require('path')
const { requireAuth, requireAdmin } = require('../middleware/auth');

const uploadDir = path.join(__dirname, "../../uploads");

// make sure uploads folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// storage config for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,  uploadDir); // save to /uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({storage})

//public : list menu
router.get('/', ctrl.list);

// admin : manage menu
router.post('/', requireAuth, requireAdmin, upload.single("image"), ctrl.create);
router.put('/:id', requireAuth, requireAdmin, upload.single("image"), ctrl.update);
router.delete('/:id', requireAuth, requireAdmin, ctrl.delete);


module.exports = router;
