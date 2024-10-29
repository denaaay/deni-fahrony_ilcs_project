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

const updateKaryawan = async (nik, nama, alamat, tgllahir, stat) => {
    const query = 'CALL update_karyawan(?, ?, ?, ?, ?)';
    return await db.query(query, [nama, alamat, tgllahir, stat, nik]);
};

module.exports = {
    addKaryawan,
    getAllKaryawan,
    updateKaryawan,
}