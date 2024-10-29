const karyawanRepo = require('../repository/karyawan')

const addKaryawan= async (req, res) => {
    try {
        const nama = req.body.nama
        const alamat = req.body.alamat
        const tgllahir = req.body.tanggal_lahir
        const divisi = req.body.divisi
        const stat = req.body.status

        const addKaryawan = await karyawanRepo.addKaryawan(nama, alamat, tgllahir, divisi, stat)
        res.status(201).json({
            status_code: 201,
            message: 'success add karyawan',
        })
        return
    } catch (e) {
        res.status(500).json({
            status_code: 500,
            message: `internal server error : ${e.message}`
        })
        return
    }
}

module.exports = {
    addKaryawan,
}