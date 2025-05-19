<?php
include('koneksi.php');

// Query untuk mengambil data MUA dari database
$sql = "SELECT id_mua, nama, keahlian FROM MUA";
$result = $conn->query($sql);

$muaData = [];
if ($result->num_rows > 0) {
    // Ambil data MUA
    while($row = $result->fetch_assoc()) {
        $muaData[] = $row;
    }
}

// Kirimkan data dalam format JSON ke front-end
echo json_encode($muaData);

// Menutup koneksi
$conn->close();
?>
