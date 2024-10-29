USE db_ilcs;

CREATE TABLE IF NOT EXISTS m_karyawan (
    nik VARCHAR(8) PRIMARY KEY,
    nama VARCHAR(150),
    alamat TEXT,
    tgllahir DATETIME,
    divisi VARCHAR(20),
    status VARCHAR(20),
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP
);