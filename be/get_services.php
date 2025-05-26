<?php
include('koneksi.php');

// Cek koneksi database
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query untuk mengambil data layanan yang dipesan
$sql = "SELECT L.id_layanan, P.nama as pelanggan, M.nama as mua, L.tanggal_layanan
        FROM Layanan L
        JOIN Pelanggan P ON L.id_pelanggan = P.id_pelanggan
        JOIN MUA M ON L.id_mua = M.id_mua";
$result = $conn->query($sql);

$services = [];
if ($result->num_rows > 0) {
    // Ambil data layanan
    while($row = $result->fetch_assoc()) {
        $services[] = $row;
    }
} else {
    // Jika tidak ada data
    $services = [];
}

// Kirimkan data dalam format JSON ke front-end
echo json_encode($services);

// Menutup koneksi
$conn->close();
?>
