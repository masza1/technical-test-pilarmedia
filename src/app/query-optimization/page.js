import SalesChart from "../components/SalesChart";

const QueryOptimization = () => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Query Optimization</h1>
            <p className="text-lg text-gray-700 mb-4">
                Indeks dapat meningkatkan performa query dalam database karena beberapa alasan utama:
            </p>
            <ul>
                <li><strong>Mempercepat Pencarian Data</strong>: Tanpa indeks, database harus melakukan pemindaian penuh (full table scan) terhadap setiap baris di tabel untuk menemukan data yang relevan. Dengan indeks, database dapat langsung menuju ke lokasi data yang diinginkan, mirip dengan indeks di akhir buku yang membantu Anda menemukan halaman spesifik dengan cepat.</li>
                <li><strong>Mengurangi Operasi I/O</strong>: Indeks menyimpan lokasi data dalam struktur yang lebih kecil dan efisien dibandingkan dengan seluruh tabel. Hal ini mengurangi jumlah operasi input/output (I/O) yang diperlukan untuk mengakses data, sehingga mempercepat waktu respon query.</li>
                <li><strong>Mengoptimalkan Penyortiran</strong>: Indeks dapat menyimpan data dalam urutan tertentu, yang mempermudah dan mempercepat operasi ORDER BY dan GROUP BY. Tanpa indeks, database harus melakukan penyortiran data secara manual setiap kali query dijalankan.</li>
                <li><strong>Mempercepat Join Tabel</strong>: Saat melakukan operasi join antara tabel, indeks pada kolom join dapat sangat mempercepat pencarian dan penggabungan data. Database dapat dengan cepat mencocokkan baris dari kedua tabel menggunakan kolom yang diindeks.</li>
                <li><strong>Meningkatkan Perencanaan Query</strong>: Indeks membantu perencana query (query planner) dalam memilih rute eksekusi yang paling efisien. Perencana query menggunakan informasi dari indeks untuk memperkirakan biaya eksekusi berbagai strategi query dan memilih yang paling optimal.</li>
            </ul>


            <div className="mt-2">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Sales Per Month</h2>
                    <SalesChart endpoint="/api/sales/monthly" title="Sales Per Month" />
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Sales Per Year</h2>
                    <SalesChart endpoint="/api/sales/yearly" title="Sales Per Year" />
                </div> <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Sales Per Salesperson</h2>
                    <SalesChart endpoint="/api/sales/by-sales-person" title="Sales Per Salesperson" />
                </div>
            </div>
        </div>
    );
};

export default QueryOptimization;
