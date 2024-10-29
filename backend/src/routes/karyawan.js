const express = require('express')
const router = express.Router()
const karyawanController = require('../controllers/karyawan')

// landing routes
router.get('/', (_, res) => {
    res.send('hallo world')
})

// karyawan routes
router.post('/karyawan', karyawanController.addKaryawan)

module.exports = router