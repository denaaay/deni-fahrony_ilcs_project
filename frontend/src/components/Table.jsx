import { useEffect, useState } from "react";
import axios from 'axios';
import { format } from 'date-fns';

export default function Table() {
    const [employees, setEmployees] = useState([]);
    const [nodata, setNodata] = useState(true);

    useEffect(() => {
        const getAllKaryawan = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/karyawan');

                const statusCode = response.data.status_code;
                const data = response.data.data
                const updatedData = data.map(item => ({
                    ...item,
                    tgllahir: format(new Date(item.tgllahir), 'dd MMMM yyyy'),
                  }));

                if (statusCode === 200) {
                    setEmployees(updatedData);
                    setNodata(false);
                } else if (statusCode === 404) {
                    setEmployees([]);
                    setNodata(true)
                }
            } catch (e) {
                console.error(e)
            }
        }

        getAllKaryawan()
    }, [])

    return(
        <div className="mt-32 w-[80vw]">
            <div className="w-full h-max flex justify-between items-center text-xl text-black font-bold mb-4">
                <p>Data Karyawan</p>
                <button className="bg-primary text-white text-sm text-light px-4 py-2 rounded border transition hover:bg-white hover:border-primary hover:text-primary">Tambah Karyawan</button>
            </div>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="bg-primary text-white">
                        <th className="py-2 px-4 border border-white text-center">NIK</th>
                        <th className="py-2 px-4 border border-white text-center">Nama</th>
                        <th className="py-2 px-4 border border-white text-center">Alamat</th>
                        <th className="py-2 px-4 border border-white text-center">Tanggal Lahir</th>
                        <th className="py-2 px-4 border border-white text-center">Status</th>
                        <th className="py-2 px-4 border border-white text-center">Divisi</th>
                        <th className="py-2 px-4 border border-white text-center">Aksi</th>
                    </tr>
                </thead>
                {!nodata &&
                    <tbody>
                        {employees.map((employee, index) => {
                            return <tr key={employee.nik} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100' }>
                                <td className="py-2 px-4 border border-gray-300 text-center">{employee.nik}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">{employee.nama}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">{employee.alamat}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">{employee.tgllahir}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">{employee.status}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">{employee.divisi}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">
                                    <button className="bg-primary text-white text-sm text-light px-4 py-2 rounded border transition hover:bg-white hover:border-primary hover:text-primary">Edit</button>
                                    <button className="bg-red-500 text-white text-sm text-light px-4 py-2 rounded border transition hover:bg-white hover:border-red-500 hover:text-red-500">Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                }
            </table>
            {nodata && <div className="w-full h-max py-10 flex justify-center border border-gray-300">
                    <p>Tidak ada data</p>
            </div>}
        </div>
    );
}