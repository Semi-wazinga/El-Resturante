require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require("path");


const connectDB = require('./config/db');
const authRoute = require('./routes/authRoute');
const menuRoute = require('./routes/menuRoute');
const reservationRoute = require('./routes/reservationRoute');
const errorHandler = require('./middleware/errorHandler');



const app = express();

// Connect DB
connectDB(process.env.MONGODB_URI);


// Global middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // change to frontend url
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(morgan('dev'))
app.use(
  helmet()
);
app.use(express.json())
app.use(cookieParser())

//example route
app.get('/', (req,res) => {
    res.send('Resturant backend is running');
})

//route
app.use('/auth', authRoute);
app.use('/menu', menuRoute);
app.use('/reservation',  reservationRoute);

// serve uploads globally
// Serve uploads with relaxed cross-origin headers
app.use(
  '/uploads',
  express.static(path.join(__dirname, '../uploads'), {
    setHeaders: (res) => {
      res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    },
  })
);


//error handler
app.use(errorHandler);


// listen to server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})