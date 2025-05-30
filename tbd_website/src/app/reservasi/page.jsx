"use client";

import React, { useEffect, useState } from "react";

// Custom color and font config
const colors = {
  primary: "#b79ea6",
  primaryDark: "#a07584",
  text: "#4a3f35",
  bg: "#faf8f8",
};

export default function ReservasiPage() {
  const [mua, setMua] = useState(null);
  const [loading, setLoading] = useState(true);
  const [idMua, setIdMua] = useState("");
  const [error, setError] = useState("");
  const [submitResponse, setSubmitResponse] = useState(null);

  // Ambil id_mua dari URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id_mua");
      setIdMua(id || "");
      if (!id) {
        setError("MUA tidak ditemukan");
        setLoading(false);
        return;
      }
      fetch(`/be/submit_booking.php?id_mua=${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setMua(data);
          }
          setLoading(false);
        })
        .catch(() => {
          setError("Gagal mengambil data MUA");
          setLoading(false);
        });
    }
  }, []);

  // Handle submit reservasi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitResponse(null);
    const formData = new FormData(e.target);
    try {
      const res = await fetch("/be/submit_booking.php", {
        method: "POST",
        body: formData,
      });
      const text = await res.text();
      if (text.toLowerCase().includes("berhasil")) {
        setSubmitResponse({ type: "success", msg: text });
        e.target.reset();
      } else {
        setSubmitResponse({ type: "error", msg: text });
      }
    } catch {
      setSubmitResponse({ type: "error", msg: "Gagal mengirim reservasi." });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f8] font-poppins pb-12">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md py-2">
        <div className="container mx-auto flex items-center justify-between px-4">
          <a className="flex items-center gap-2" href="#">
            <div
              className="w-10 h-10 bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: "url('/assets/logo-muar.png')" }}
            ></div>
            <div>
              <div className="font-didot font-bold text-[1.2rem] lowercase" style={{ color: colors.primary }}>
                muar
              </div>
              <div className="text-[0.65rem] tracking-wider font-semibold" style={{ color: colors.primary, marginTop: -4 }}>
                Reservasi
              </div>
            </div>
          </a>
          <button
            className="lg:hidden focus:outline-none"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => {
              const nav = document.getElementById("navbarNav");
              nav.classList.toggle("hidden");
            }}
          >
            <svg className="w-6 h-6" style={{ color: colors.primary }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div id="navbarNav" className="hidden lg:flex lg:items-center lg:gap-2">
            <ul className="flex flex-col lg:flex-row items-center gap-2">
              <li>
                <a className="relative px-4 py-2 font-semibold" style={{ color: colors.text }} href="/home">
                  Home
                </a>
              </li>
              <li>
                <a className="relative px-4 py-2 font-semibold" style={{ color: colors.text }} href="/mua_reservation">
                  MUA Reservation
                </a>
              </li>
              <li>
                <a className="relative px-4 py-2 font-semibold" style={{ color: colors.text }} href="/mua_schedule">
                  MUA Schedule
                </a>
              </li>
              <li>
                <a className="relative px-4 py-2 font-semibold" style={{ color: colors.text }} href="/about_us">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <section className="container mx-auto mt-32 px-2">
        <div className="form-wrapper bg-white rounded-2xl shadow-2xl p-7 max-w-2xl mx-auto mb-12">
          <h2 className="font-didot text-[#4a3f35] text-2xl text-center mb-8 font-bold">Reservasi Layanan MUA</h2>

          {/* Info MUA */}
          <div className="mb-6">
            <div className="bg-[#f7e9ec] rounded-xl p-6 mb-6 shadow card mua-info">
              {loading ? (
                <h5 className="text-[#5a3f45] font-semibold mb-2">Loading...</h5>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <>
                  <h5 className="text-[#5a3f45] font-semibold mb-2">{mua?.nama}</h5>
                  <p className="text-[#6f5a5a] mb-1">Expertise: {mua?.keahlian}</p>
                  <p className="text-[#6f5a5a] mb-1">
                    Rate: Rp {mua?.tarif ? parseFloat(mua.tarif).toLocaleString("id-ID") : "-"}
                  </p>
                  <p className="text-[#6f5a5a] mb-1">Location: {mua?.lokasi}</p>
                </>
              )}
            </div>
          </div>

          {/* Form */}
          <form
            method="POST"
            action="/be/submit_booking.php"
            id="formReservasi"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="id_mua" value={idMua} />
            <div className="mb-4">
              <label htmlFor="nama" className="font-medium block mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="form-control block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
                name="nama"
                id="nama"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="kontak" className="font-medium block mb-1">
                No. WhatsApp / Contact
              </label>
              <input
                type="text"
                className="form-control block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
                name="kontak"
                id="kontak"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="alamat" className="font-medium block mb-1">
                Full Address
              </label>
              <textarea
                className="form-control block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
                name="alamat"
                id="alamat"
                rows={3}
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="tanggal" className="font-medium block mb-1">
                Reservation Date
              </label>
              <input
                type="date"
                className="form-control block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
                name="tanggal_layanan"
                id="tanggal"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full font-semibold text-white bg-primary hover:bg-primary-dark transition btn-pesan mt-3"
              style={{ backgroundColor: colors.primary }}
            >
              Send Reservation
            </button>
          </form>
          {submitResponse && (
            <div
              className={`mt-6 text-center text-base font-semibold ${
                submitResponse.type === "success" ? "text-green-600" : "text-red-500"
              }`}
            >
              {submitResponse.msg}
            </div>
          )}
        </div>
      </section>

      {/* Custom global style for font & color */}
      <style jsx global>{`
        :root {
          --primary: #b79ea6;
          --primary-dark: #a07584;
        }
        .bg-primary { background-color: var(--primary); }
        .bg-primary-dark { background-color: var(--primary-dark); }
        .text-primary { color: var(--primary); }
        .font-didot { font-family: 'Didot', serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}