<?php
session_start();
include 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if (!$username || !$password) {
        echo "Username dan password wajib diisi";
        exit;
    }

    // Cari user berdasar username
    $stmt = $conn->prepare("SELECT id_mua, password FROM mua WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($id_mua, $password_hash);
        $stmt->fetch();

        if (password_verify($password, $password_hash)) {
            // Password cocok, login berhasil
            $_SESSION['id_mua'] = $id_mua;

            // Redirect ke dashboard atau kirim response sukses
            header("Location: dashboard_mua.php");
            exit;
        } else {
            echo "Password salah";
        }
    } else {
        echo "Username tidak ditemukan";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Method tidak diizinkan";
}
