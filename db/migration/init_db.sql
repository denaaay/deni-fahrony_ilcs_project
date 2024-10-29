USE db_ilcs;

-- Membuat tabel
CREATE TABLE IF NOT EXISTS m_karyawan (
    nik VARCHAR(8) PRIMARY KEY,
    nama VARCHAR(150),
    alamat TEXT,
    tgllahir DATETIME,
    divisi ENUM('IT', 'HRD', 'FINANCE') NOT NULL,
    status ENUM('Tetap', 'Kontrak') NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Membuat stored procedure untuk menambah karyawan
DELIMITER $$

CREATE PROCEDURE add_karyawan(
    IN p_nama VARCHAR(150),
    IN p_alamat TEXT,
    IN p_tgllahir DATETIME,
    IN p_divisi ENUM('IT', 'HRD', 'FINANCE'),
    IN p_status ENUM('Tetap', 'Kontrak')
)
BEGIN
    DECLARE v_nik VARCHAR(8);
    DECLARE v_seq INT;
    DECLARE v_divisi_code VARCHAR(2);
    DECLARE v_year_suffix VARCHAR(2);

    -- Menentukan kode divisi dan tahun
    SET v_divisi_code = CASE p_divisi
        WHEN 'IT' THEN '10'
        WHEN 'HRD' THEN '11'
        WHEN 'FINANCE' THEN '12'
    END;

    SET v_year_suffix = DATE_FORMAT(NOW(), '%y');

    -- Mengambil urutan NIK terakhir berdasarkan divisi
    SELECT COALESCE(MAX(CAST(SUBSTRING(nik, -4) AS UNSIGNED)), 0) + 1 INTO v_seq
    FROM m_karyawan
    WHERE SUBSTRING(nik, 1, 2) = v_divisi_code;

    -- Menghasilkan NIK baru
    SET v_nik = CONCAT(v_divisi_code, v_year_suffix, LPAD(v_seq, 4, '0'));

    -- Menambahkan data karyawan ke tabel
    INSERT INTO m_karyawan (nik, nama, alamat, tgllahir, divisi, status)
    VALUES (v_nik, p_nama, p_alamat, p_tgllahir, p_divisi, p_status);
END $$

DELIMITER ;


-- Membuat stored procedure untuk mengedit karyawan
DELIMITER $$

CREATE PROCEDURE update_karyawan (
    IN p_nama VARCHAR(150),
    IN p_alamat TEXT,
    IN p_tgllahir DATETIME,
    IN p_stat VARCHAR(20),
    IN p_nik VARCHAR(8)
)
BEGIN
    UPDATE m_karyawan
    SET 
        nama = p_nama,
        alamat = p_alamat,
        tgllahir = p_tgllahir,
        status = p_stat,
        created_date = CURRENT_TIMESTAMP
    WHERE nik = p_nik;
END $$

DELIMITER ;
