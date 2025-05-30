"use client";

import React, { useEffect, useState } from "react";

// Konfigurasi warna dan font custom, sebaiknya juga didaftarkan di tailwind.config.js
const colors = {
  primary: "#b79ea6",
  primaryDark: "#8a6d75",
  text: "#4a3f35",
  lightBg: "#faf8f8",
};

export default function MUAReservationPage() {
  const [muaList, setMuaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // Fetch MUA data from the API

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/get_mua");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      setMuaList(result); // <-- GANTI INI!
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Gagal mengambil data");
      setLoading(false);
    }
  };

  fetchData();
}, []);


  return (
    <div className="min-h-screen bg-[#faf8f8] font-poppins pb-12">
      {/* Main Title */}
      <h1 className="font-playfair font-bold text-[2.3rem] sm:text-[3.5rem] tracking-wide mt-32 mb-4 text-center animate-fadeInDown text-black">
        CHOOSE YOUR MUA
      </h1>

      {/* MUA List */}
      <div className="container mx-auto mt-6 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="mua-items">
          {loading ? (
            <div className="col-span-full text-center text-lg">Loading...</div>
          ) : error ? (
            <div className="col-span-full text-center text-red-500">{error}</div>
          ) : !muaList || muaList.length === 0 ? (
            <div className="col-span-full text-center text-gray-600">No MUA data available.</div>
          ) : (
            muaList.map((mua) => (
              <div key={mua.id_mua} className="flex flex-col">
                <div className="rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-200 hover:-translate-y-1 bg-white flex flex-col h-full">
                  <img
                    src={`/assets/${mua.foto}`}
                    alt={mua.nama}
                    className="rounded-t-xl h-[220px] object-cover object-center"
                  />
                  <div className="flex flex-col justify-start p-4 flex-grow">
                    <h5 className="font-poppins font-bold text-lg mb-2">{mua.nama}</h5>
                    <p className="font-poppins font-light text-base text-[#333] mb-4 leading-relaxed">
                      <strong>Keahlian:</strong> {mua.keahlian}
                      <br />
                      <strong>Tarif:</strong> Rp {parseFloat(mua.tarif).toLocaleString("id-ID")}
                      <br />
                      <strong>Lokasi:</strong> {mua.lokasi}
                    </p>
                    <a
                      href={`/reservasi?id_mua=${mua.id_mua}`}
                      className="mt-auto block w-full text-center py-3 rounded-b-xl bg-primary text-white font-semibold text-lg hover:bg-primary-dark transition"
                      style={{ backgroundColor: colors.primary }}
                    >
                      Reservasi
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Custom Styles for Tailwind (add in globals.css or tailwind.config.js) */}
      <style jsx global>{`
        :root {
          --primary: #b79ea6;
          --primary-dark: #8a6d75;
        }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .bg-primary { background-color: var(--primary); }
        .bg-primary-dark { background-color: var(--primary-dark); }
        .text-primary { color: var(--primary); }
        .hover\\:bg-primary-dark:hover { background-color: var(--primary-dark); }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeInDown { animation: fadeInDown 1s ease forwards; }
      `}</style>
    </div>
  );
}