const express = require('express');
require('dotenv').config();
const dbConnect = require('./DBConfig/dbConfig');
const router = require('./Routes/route');
const cors = require('cors');


const app = express();

app.use(cors());
dbConnect();

app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Authentication Backend Server is running');
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});