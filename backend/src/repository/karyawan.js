const db = require('../config/db');

const addKaryawan = async (nama, alamat, tgllahir, divisi, stat) => {
    const query = 'call add_karyawan(?, ?, ?, ?, ?)'
    return await db.query(query, [nama, alamat, tgllahir, divisi, stat])
}

module.exports = {
    addKaryawan,
}