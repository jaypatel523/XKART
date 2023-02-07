require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./db/connect');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const wishlistRoutes = require('./routes/wishlist');

// const path = require('path');
// app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors());


app.use('/', userRoutes);
app.use('/', productRoutes);
app.use('/', wishlistRoutes);




// start the server 
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => console.log(`server is listening on port : ${process.env.PORT}`))
    }
    catch (err) {
        console.log(err);
    }
}

start();