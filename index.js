require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const imagesRoute = require('./routes/api/get-images');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('trust proxy', 1);// trust first proxy

app.use('/api/get-images', imagesRoute);

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));