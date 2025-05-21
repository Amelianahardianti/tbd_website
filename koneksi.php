<?php
// Koneksi ke MySQL
$servername = "localhost";
$username = "root";  // Ganti dengan username MySQL kamu
$password = Lope1934";      // Ganti dengan password MySQL kamu
$dbname = "mua";  // Nama database yang sudah kamu buat

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Mengecek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
