// server.js
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Memuat variabel lingkungan dari file .env

const app = express();
const port = 3123;

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database');
});

// Middleware untuk JSON
app.use(express.json());

// Routes API
const ccs811Routes = require('./routes/ccs811');
const dht21Routes = require('./routes/dht21');
const flowrateRoutes = require('./routes/flowrate'); 
const irradianceRoutes = require('./routes/irradiance');
const pzem017Routes = require('./routes/pzem017');
const tdsRoutes = require('./routes/tds');
const phRoutes = require('./routes/ph');

app.use('/ccs811', ccs811Routes(db));
app.use('/dht21', dht21Routes(db));
app.use('/flowrate', flowrateRoutes(db));
app.use('/irradiance', irradianceRoutes(db));
app.use('/pzem017', pzem017Routes(db));
app.use('/tds', tdsRoutes(db));
app.use('/ph', phRoutes(db));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
