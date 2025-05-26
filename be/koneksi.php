<?php
// koneksi.php
// File ini untuk koneksi ke database MySQL
// Please sesuaikan dengan konfigurasi XAMPP kalian yakk
// Misalnya, kalau pake XAMPP biasanya port MySQL-nya 3307
// Jangan lupa buat database muar_db dulu yaa
// Kalau belum ada, bisa pake phpMyAdmin di XAMPP buat bikin database-nya

$host = "localhost";
$port = "3307";  // sesuaikan dengan port MySQL di XAMPP kamu
$user = "root";
$pass = "";      // Kosongin aja soalnya pake xampp
$dbname = "muar_db";  // nama database yang lu buat

// Membuat koneksi ke MySQL dengan port yang ditentukan
$conn = new mysqli($host, $user, $pass, $dbname, $port);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// echo "Koneksi berhasil!"; // bisa di-uncomment buat tes koneksi
?>
