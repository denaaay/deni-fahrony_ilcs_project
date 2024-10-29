import { useState } from "react";
import Navbar from "../components/Navbar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

export default function AddKaryawan() {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [tanggalLahir, setTanggalLahir] = useState(null);
    const [divisi, setDivisi] = useState('IT');
    const [status, setStatus] = useState('Tetap');
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formattedDate = tanggalLahir ? format(tanggalLahir, "yyyy-MM-dd HH:mm:ss") : null;
    
        try {
            const response = await fetch(
                'http://localhost:3000/api/karyawan', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nama: nama,
                        alamat: alamat,
                        tanggal_lahir: formattedDate,
                        divisi: divisi,
                        status: status,
                    })
                }
            );
            const data = await response.json();
            if (data.status_code === 201) {
                navigate(-1)
            }
        } catch (e) {
          console.error(e);
        }
      };

    return(
        <div className="w-full h-full flex justify-center">
            <Navbar />
            <div className="mt-32 w-[70vw]">
                <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                    <div className="w-full h-max flex justify-between items-center mb-10">
                        <label className="w-[50%] text-xl">Nama Lengkap</label>
                        <input className="w-[50%] px-4 py-2 border-[1px] border-[#576574] rounded" type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama Karyawan" required />
                    </div>

                    <div className="w-full h-max flex justify-between items-center mb-10">
                        <label className="w-[50%] text-xl">Alamat</label>
                        <input className="w-[50%] px-4 py-2 border-[1px] border-[#576574] rounded" type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat Karyawan" required />
                    </div>

                    <div className="w-full flex justify-start items-center mb-10">
                        <label className="w-[50%] text-xl">Tanggal Lahir</label>
                        <DatePicker className="w-full px-4 py-2 border-[1px] border-[#576574] rounded" selected={tanggalLahir} onChange={(date) => setTanggalLahir(date)} dateFormat="yyyy-MM-dd" required placeholderText="Pilih tanggal" showPopperArrow={false} popperPlacement="bottom" isClearable yearDropdownItemNumber={100} scrollableYearDropdown  renderCustomHeader={({ date, changeYear, changeMonth }) => (<div style={{ margin: 10 }}>
                            <select value={date.getFullYear()} onChange={({ target: { value } }) => changeYear(Number(value))}>{Array.from({ length: 100 }, (_, i) => {
                                const year = new Date().getFullYear() - i;
                                return <option key={year} value={year}>{year}</option>;
                            })}</select>
                            <select value={date.getMonth()} onChange={({ target: { value } }) => changeMonth(Number(value))}>{['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map((month, index) => ( <option key={index} value={index}>{month}</option>))}
                            </select>
                        </div>
                    )}/>
                    </div>

                    <div className="w-full flex justify-start items-center mb-10">
                        <label className="w-[50%] text-xl">Divisi</label>
                        <select value={divisi} onChange={(e) => setDivisi(e.target.value)} required className="w-[50%] px-4 py-2 border-[1px] border-[#576574] rounded">
                            <option value="IT">IT</option>
                            <option value="HRD">HRD</option>
                            <option value="FINANCE">FINANCE</option>
                        </select>
                    </div>

                    <div className="w-full flex justify-start items-center mb-10">
                        <label className="w-[50%] text-xl">Status</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)} required className="w-[50%] px-4 py-2 border-[1px] border-[#576574] rounded">
                            <option value="Tetap">Tetap</option>
                            <option value="Kontrak">Kontrak</option>
                        </select>
                    </div>
                    <div className="w-full flex justify-end items-center gap-4">
                        <button onClick={handleCancel} className="bg-red-500 text-white text-lg text-light px-4 py-2 rounded border transition hover:bg-white hover:border-red-500 hover:text-red-500">Batal</button>
                        <button type="submit" className="bg-primary text-white text-lg text-light px-4 py-2 rounded border transition hover:bg-white hover:border-primary hover:text-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}