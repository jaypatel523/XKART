require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(process.env.PORT, () => console.log(`Server is listening on port : ${process.env.PORT}`));