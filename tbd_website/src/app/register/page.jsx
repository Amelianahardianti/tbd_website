"use client"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f8] px-5 py-8 font-poppins">
      <div className="w-full max-w-[500px] rounded-2xl shadow-xl bg-white p-8 card">
        <h2 className="font-didot font-bold text-[2.5rem] text-center text-primary mb-6 tracking-widest">
          Register MUA
        </h2>
        <form
          action="be/register.php"
          method="POST"
          encType="multipart/form-data"
          className="space-y-5"
        >
          <div>
            <label htmlFor="nama" className="block font-semibold text-[#4a3f35] mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              required
              className="form-control block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="username" className="block font-semibold text-[#4a3f35] mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="form-control block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold text-[#4a3f35] mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="form-control block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="kontak" className="block font-semibold text-[#4a3f35] mb-1">
              Nomor HP
            </label>
            <input
              type="text"
              id="kontak"
              name="kontak"
              required
              className="form-control block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="keahlian" className="block font-semibold text-[#4a3f35] mb-1">
              Keahlian
            </label>
            <input
              type="text"
              id="keahlian"
              name="keahlian"
              required
              className="form-control block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="tarif" className="block font-semibold text-[#4a3f35] mb-1">
              Tarif (Rp)
            </label>
            <input
              type="number"
              id="tarif"
              name="tarif"
              required
              min={0}
              className="form-control block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="lokasi" className="block font-semibold text-[#4a3f35] mb-1">
              Lokasi
            </label>
            <input
              type="text"
              id="lokasi"
              name="lokasi"
              required
              className="form-control block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="foto" className="block font-semibold text-[#4a3f35] mb-1">
              Foto Profil
            </label>
            <input
              type="file"
              id="foto"
              name="foto"
              accept="image/*"
              className="form-control block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full py-2 rounded-full font-semibold text-white bg-primary hover:bg-primary-dark transition"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 font-medium text-[#4a3f35]">
          Sudah punya akun?{" "}
          <a
            href="/login"
            className="text-primary font-bold hover:underline hover:text-primary-dark transition"
          >
            Login di sini
          </a>
        </p>
      </div>
      {/* Custom style untuk font & warna */}
      <style jsx global>{`
        :root {
          --primary: #b79ea6;
          --primary-dark: #a07584;
        }
        .text-primary { color: var(--primary); }
        .text-primary-dark { color: var(--primary-dark); }
        .bg-primary { background-color: var(--primary); }
        .bg-primary-dark { background-color: var(--primary-dark); }
        .font-didot { font-family: 'Didot', serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        @media (max-width: 480px) {
          .card { width: 95% !important; padding: 1rem !important; }
        }
      `}</style>
    </div>
  );
}