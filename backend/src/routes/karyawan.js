const express = require('express')
const router = express.Router()
const karyawanController = require('../controllers/karyawan')

// landing routes
router.get('/', (_, res) => {
    res.send('hallo world')
})

// karyawan routes
router.get('/karyawan', karyawanController.getAllKaryawan)
router.get('/karyawan/:nik', karyawanController.getKaryawanByNik)
router.post('/karyawan', karyawanController.addKaryawan)
router.put('/karyawan/:nik', karyawanController.updateKaryawan)
router.delete('/karyawan/:nik', karyawanController.deleteKaryawan)

module.exports = router