const karyawanRepo = require('../repository/karyawan')

const addKaryawan= async (req, res) => {
    try {
        const nama = req.body.nama
        const alamat = req.body.alamat
        const tgllahir = req.body.tanggal_lahir
        const divisi = req.body.divisi
        const stat = req.body.status

        await karyawanRepo.addKaryawan(nama, alamat, tgllahir, divisi, stat)
        res.status(201).json({
            status_code: 201,
            message: 'success add karyawan'
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

const getAllKaryawan = async (_, res) => {
    try {
        const karyawan = await karyawanRepo.getAllKaryawan()

        if (karyawan.length === 0) {
            res.status(404).json({
                status_code: 404,
                message: 'data not found'
            })
            return
        }

        res.status(200).json({
            status_code: 200,
            message: 'success get all karyawan',
            data: karyawan
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

const getKaryawanByNik = async (req, res) => {
    try {
        const nik = req.params.nik

        const karyawan = await karyawanRepo.getKaryawanByNik(nik)
        
        if (karyawan[0].length === 0) {
            res.status(404).json({
                status_code: 404,
                message: 'karyawan not found'
            })
            return
        }

        res.status(200).json({
            status_code: 200,
            message: 'success getting karyawan by nik',
            data: karyawan[0],
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

const updateKaryawan = async (req, res) => {
    try {
        const nik = req.params.nik
        const nama = req.body.nama
        const alamat = req.body.alamat
        const tgllahir = req.body.tanggal_lahir
        const stat = req.body.status

        const karyawan = await karyawanRepo.getKaryawanByNik(nik)
        if (karyawan[0].length === 0) {
            res.status(404).json({
                status_code: 404,
                message: 'karyawan not found'
            })
            return
        }

        if (!nama || !alamat || !tgllahir || !stat) {
            return res.status(400).json({
                message: 'all fields must be fully filled',
            });
        }

        await karyawanRepo.updateKaryawan(nik, nama, alamat, tgllahir, stat)
        res.status(200).json({
            status_code: 200,
            message: 'success updating karyawan'
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

const deleteKaryawan = async (req, res) => {
    try {
        const nik = req.params.nik

        const karyawan = await karyawanRepo.getKaryawanByNik(nik)
        if (karyawan[0].length === 0) {
            res.status(404).json({
                status_code: 404,
                message: 'karyawan not found'
            })
            return
        }

        await karyawanRepo.deleteKaryawan(nik)
        res.status(200).json({
            status_code: 200,
            message: 'success deleting kryawan'
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
    getAllKaryawan,
    getKaryawanByNik,
    updateKaryawan,
    deleteKaryawan
}