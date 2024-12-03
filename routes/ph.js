// routes/ph.js
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // Route untuk mengambil data dari tabel 'PH' berdasarkan tanggal dan validasi secretkey
  router.get('/:secretkey/:date', (req, res) => {
    const { secretkey, date } = req.params;

    // Validasi secretkey
    if (secretkey !== process.env.SECRET_KEY) {
      return res.status(403).json({
        code: 403,
        message: 'Forbidden: Invalid secret key'
      });
    }

    // Validasi format tanggal (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return res.status(400).json({
        code: 400,
        message: 'Bad Request: Invalid date format, use YYYY-MM-DD'
      });
    }

    // Query untuk mengambil data dari tabel 'ph' berdasarkan tanggal
    const query = 'SELECT id, v_ph, ph, updated_at FROM ph WHERE updated_at LIKE ? ORDER BY updated_at DESC';

    db.query(query, [`${date}%`], (err, results) => {
      if (err) {
        return res.status(500).json({
          code: 500,
          message: 'Internal Server Error',
          error: err.message
        });
      }

      // Jika data ditemukan, konversi 'updated_at' ke GMT+7
      if (results.length > 0) {
        // Menambahkan konversi waktu GMT+7 untuk setiap hasil
        const resultsWithUpdatedAtGMT7 = results.map(result => {
          const jakartaTime = new Date(result.updated_at); // waktu dalam UTC
          const jakartaTimeGMT7 = new Date(jakartaTime.getTime() + (7 * 60 * 60 * 1000)); // menambahkan 7 jam untuk konversi ke GMT+7
          const updatedAtGMT7 = jakartaTimeGMT7.toISOString().replace('T', ' ').substring(0, 19); // Format: YYYY-MM-DD HH:mm:ss

          // Mengembalikan data dengan waktu yang sudah dikonversi ke GMT+7
          return {
            ...result,
            updated_at: updatedAtGMT7
          };
        });

        // Mengirimkan data yang sudah dikonversi
        return res.status(200).json({
          code: 200,
          message: 'Success',
          data: resultsWithUpdatedAtGMT7
        });
      } else {
        // Jika tidak ada data ditemukan
        return res.status(404).json({
          code: 404,
          message: 'No data found for the specified date'
        });
      }
    });
  });

  return router;
};
