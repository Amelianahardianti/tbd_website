<?php
include('koneksi.php');

// Mengambil data dari permintaan POST (dikirim dari JavaScript)
$data = json_decode(file_get_contents('php://input'), true);

// Ambil data pelanggan, MUA dan tanggal layanan
$pelanggan = $data['pelanggan'];
$muaId = $data['muaId'];
$tanggalLayanan = $data['tanggalLayanan'];

// Query untuk memasukkan data pemesanan ke tabel Layanan
$sql = "INSERT INTO Layanan (id_mua, id_pelanggan, tanggal_layanan) VALUES ('$muaId', '$pelanggan', '$tanggalLayanan')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success", "message" => "Layanan berhasil dipesan!"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}

$conn->close();
?>
