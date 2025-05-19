// Fungsi untuk mengambil data MUA dan menampilkan di halaman
function loadMuaData() {
    fetch('get_mua.php')  // Mengambil data MUA dari back-end (PHP)
        .then(response => response.json())
        .then(data => {
            const muaList = document.getElementById('mua-items');
            const muaSelect = document.getElementById('mua');

            data.forEach(mua => {
                // Menampilkan daftar MUA
                const li = document.createElement('li');
                li.textContent = `${mua.nama} - ${mua.keahlian}`;
                muaList.appendChild(li);

                // Menambahkan opsi MUA ke dropdown
                const option = document.createElement('option');
                option.value = mua.id_mua;
                option.textContent = mua.nama;
                muaSelect.appendChild(option);
            });
        });
}

// Fungsi untuk menangani form pemesanan
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const pelanggan = document.getElementById('pelanggan').value;
    const muaId = document.getElementById('mua').value;
    const tanggalLayanan = document.getElementById('tanggal_layanan').value;

    const requestData = {
        pelanggan: pelanggan,
        muaId: muaId,
        tanggalLayanan: tanggalLayanan
    };

    // Kirim data pemesanan ke back-end (PHP)
    fetch('submit_booking.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Layanan berhasil dipesan!');
        loadServiceData();  // Memuat data layanan yang dipesan
    })
    .catch(error => console.error('Error:', error));
});

// Fungsi untuk memuat data layanan yang dipesan
function loadServiceData() {
    fetch('get_services.php')  // Mengambil data layanan yang dipesan dari back-end (PHP)
        .then(response => response.json())
        .then(data => {
            const serviceList = document.getElementById('service-items');
            serviceList.innerHTML = '';  // Clear previous list

            data.forEach(service => {
                const li = document.createElement('li');
                li.textContent = `${service.pelanggan} - ${service.mua} - ${service.tanggal_layanan}`;
                serviceList.appendChild(li);
            });
        });
}

// Memuat data MUA dan layanan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    loadMuaData();
    loadServiceData();
});
