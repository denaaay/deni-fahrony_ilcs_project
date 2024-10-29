const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Buat koneksi ke database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal:', err);
        return;
    }
    console.log('Terhubung ke database MySQL!');
});

app.get('/', (req, res) => {
    res.send('Selamat datang di API Karyawan!');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
