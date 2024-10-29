const db = require('../config/db');

const addKaryawan = async (nama, alamat, tgllahir, divisi, stat) => {
    const query = 'call add_karyawan(?, ?, ?, ?, ?)'
    return await db.query(query, [nama, alamat, tgllahir, divisi, stat])
}

const getAllKaryawan = async () => {
    const query = 'SELECT nik, nama, alamat, tgllahir, divisi, status FROM m_karyawan'
    const [result] = await db.query(query)
    return result
}

module.exports = {
    addKaryawan,
    getAllKaryawan,
}