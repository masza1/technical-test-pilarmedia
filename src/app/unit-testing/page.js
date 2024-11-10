const UnitTesting = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Unit Testing with Jest</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Apa itu Pengujian Unit?</h2>
                <p className="text-lg text-gray-700 mb-2">
                    Pengujian unit adalah metode pengujian perangkat lunak di mana unit atau komponen individual dari perangkat lunak diuji.
                    Tujuannya adalah untuk memvalidasi bahwa setiap unit perangkat lunak berfungsi sesuai harapan. Jest adalah kerangka kerja pengujian yang populer
                    untuk proyek JavaScript, yang menyediakan cara sederhana untuk menguji komponen React dan fungsi JavaScript lainnya.
                </p>
                <p className="text-lg text-gray-700 mb-2">
                    Jest dilengkapi dengan berbagai fitur seperti pengujian snapshot, test runner bawaan, dan matcher yang kuat
                    yang membuat penulisan tes menjadi sederhana dan efisien.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Penjelasan Sidebar.test.js</h2>
                <p className="text-lg text-gray-700 mb-2">
                    File `Sidebar.test.js` berisi pengujian unit untuk komponen `Sidebar`. Berikut adalah uraian tentang apa yang dilakukan setiap tes:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-2">
                    <li>
                        <span className="font-semibold">Tes Render Awal:</span>
                        Memverifikasi bahwa sidebar dirender tanpa crash dan berisi teks header utama.
                    </li>
                    <li>
                        <span className="font-semibold">Keberadaan dan Atribut Link:</span>
                        Memastikan bahwa semua link dirender dengan benar dengan teks dan atribut href yang tepat.
                    </li>
                    <li>
                        <span className="font-semibold">Teks Footer:</span>
                        Memeriksa apakah teks footer dirender dengan benar.
                    </li>
                </ul>
                <p className="text-lg text-gray-700 mb-2">
                    Dengan menjalankan tes ini, kita memastikan bahwa komponen `Sidebar` berfungsi dengan benar dan link menavigasi ke rute yang diharapkan.
                </p>
            </section>
        </div>
    );
};

export default UnitTesting;
