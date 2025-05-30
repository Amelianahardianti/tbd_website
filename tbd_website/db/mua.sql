-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Waktu pembuatan: 26 Bulan Mei 2025 pada 17.43
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `muar_db`
--

CREATE DATABASE IF NOT EXISTS `muar_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `muar_db`;

-- --------------------------------------------------------

--
-- Struktur dari tabel `mua`
--

CREATE TABLE `mua` (
  `id_mua` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `keahlian` varchar(100) NOT NULL,
  `tarif` decimal(10,2) NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `mua`
--

INSERT INTO `mua` (`id_mua`, `nama`, `username`, `password`, `keahlian`, `tarif`, `lokasi`, `foto`) VALUES
(1, 'Nina MakeUp Artist', 'Nina MakeUp Artist', '1234', 'Makeup Natural Korea', 500000.00, 'Jakarta', 'mua10.jpg'),
(2, 'Dimas Glam Studio', 'Dimas Glam Studio', '1234', 'Makeup Glam', 750000.00, 'Bandung', 'mua1.jpg'),
(3, 'Sari Beauty Expert', 'Sari Beauty Expert', '1234', 'Makeup Klasik & Elegan', 600000.00, 'Surabaya', 'mua3.jpg'),
(4, 'Rina Artist', 'Rina Artist', '1234', 'Makeup Natural', 550000.00, 'Yogyakarta', 'mua5.jpg'),
(5, 'Bayu Makeup', 'Bayu Makeup', '1234', 'Makeup Glam', 700000.00, 'Semarang', 'mua11.jpg'),
(6, 'Tika Beauty', 'Tika Beauty', '1234', 'Makeup Modern', 650000.00, 'Bali', 'mua6.jpg'),
(7, 'Han Ji Pyeong MUA', 'Han Ji Pyeong MUA', '1234', 'Bridal Make up', 800000.00, 'Bandung', 'mua2.jpg');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `mua`
--
ALTER TABLE `mua`
  ADD PRIMARY KEY (`id_mua`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `mua`
--
ALTER TABLE `mua`
  MODIFY `id_mua` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
