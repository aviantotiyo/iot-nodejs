// routes/tds.js
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // Route untuk mengambil data dari tabel 'TDS' berdasarkan tanggal dan validasi secretkey
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

    // Query untuk mengambil data dari tabel 'pzem017' berdasarkan tanggal
    const query = 'SELECT id, suhu, v_tds, tds, ec, updated_at FROM tds WHERE updated_at LIKE ? ORDER BY updated_at DESC';

    db.query(query, [`${date}%`], (err, results) => {
      if (err) {
        return res.status(500).json({
          code: 500,
          message: 'Internal Server Error',
          error: err.message
        });
      }

      // Jika data ditemukan, kembalikan respons JSON
      if (results.length > 0) {
        return res.status(200).json({
          code: 200,
          message: 'Success',
          data: results
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
