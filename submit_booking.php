<?php
include('koneksi.php');

// Mengambil data dari permintaan POST (dikirim dari JavaScript)
$data = json_decode(file_get_contents('php://input'), true);

// Validasi apakah data yang diperlukan ada
if (!isset($data['pelanggan']) || !isset($data['muaId']) || !isset($data['tanggalLayanan'])) {
    echo json_encode(["status" => "error", "message" => "Data yang dibutuhkan tidak lengkap."]);
    exit;
}

// Ambil data pelanggan, MUA dan tanggal layanan
$pelanggan = $data['pelanggan'];  // ID pelanggan
$muaId = $data['muaId'];          // ID MUA
$tanggalLayanan = $data['tanggalLayanan'];  // Tanggal layanan

// Menyiapkan query untuk memasukkan data pemesanan ke tabel Layanan (menggunakan prepared statements untuk keamanan)
$stmt = $conn->prepare("INSERT INTO Layanan (id_mua, id_pelanggan, tanggal_layanan) VALUES (?, ?, ?)");
$stmt->bind_param("iis", $muaId, $pelanggan, $tanggalLayanan);

// Menjalankan query
if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Layanan berhasil dipesan!"]);
} else {
    echo json_encode(["status" => "error", "message" => $stmt->error]);
}

// Menutup statement dan koneksi
$stmt->close();
$conn->close();
?>
