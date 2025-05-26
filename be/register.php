<?php
include 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = $_POST['nama'] ?? '';
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $kontak = $_POST['kontak'] ?? '';
    $keahlian = $_POST['keahlian'] ?? '';
    $tarif = $_POST['tarif'] ?? 0;
    $lokasi = $_POST['lokasi'] ?? '';

    // Validasi sederhana
    if (!$nama || !$username || !$password || !$kontak || !$keahlian || !$tarif || !$lokasi) {
        echo "Data tidak lengkap";
        exit;
    }

    // Cek username sudah dipakai atau belum
    $stmt = $conn->prepare("SELECT id_mua FROM mua WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows > 0) {
        echo "Username sudah digunakan";
        exit;
    }
    $stmt->close();

    // Proses upload foto
    $foto_nama = null;
    if (isset($_FILES['foto']) && $_FILES['foto']['error'] == 0) {
        $file_tmp = $_FILES['foto']['tmp_name'];
        $file_name = basename($_FILES['foto']['name']);
        $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        $allowed_ext = ['jpg', 'jpeg', 'png', 'gif'];

        if (in_array($file_ext, $allowed_ext)) {
            $foto_nama = uniqid('foto_') . '.' . $file_ext;
            $upload_dir = __DIR__ . '/../assets/';  // folder simpan foto (sesuaikan)
            if (!move_uploaded_file($file_tmp, $upload_dir . $foto_nama)) {
                echo "Gagal upload foto";
                exit;
            }
        } else {
            echo "Format foto tidak didukung";
            exit;
        }
    }

    // Hash password
    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    // Simpan data MUA ke database
    $stmt = $conn->prepare("INSERT INTO mua (nama, username, password, kontak, keahlian, tarif, lokasi, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $nama, $username, $password_hash, $kontak, $keahlian, $tarif, $lokasi, $foto_nama);

    if ($stmt->execute()) {
        echo "Registrasi berhasil";
    } else {
        echo "Gagal registrasi";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Method tidak diizinkan";
}
?>
