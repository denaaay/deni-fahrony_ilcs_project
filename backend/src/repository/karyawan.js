const db = require('../config/db');

const addKaryawan = async (nama, alamat, tgllahir, divisi, stat) => {
    const query = 'call add_karyawan(?, ?, ?, ?, ?)'
    return await db.query(query, [nama, alamat, tgllahir, divisi, stat])
}

const getAllKaryawan = async () => {
    const query = 'select nik, nama, alamat, tgllahir, divisi, status from m_karyawan'
    const [result] = await db.query(query)
    return result
}

const updateKaryawan = async (nik, nama, alamat, tgllahir, stat) => {
    const query = 'call update_karyawan(?, ?, ?, ?, ?)'
    return await db.query(query, [nama, alamat, tgllahir, stat, nik])
}

const deleteKaryawan = async (nik) => {
    const query = 'call delete_karyawan(?)'
    return await db.query(query, [nik])
}

module.exports = {
    addKaryawan,
    getAllKaryawan,
    updateKaryawan,
    deleteKaryawan,
}