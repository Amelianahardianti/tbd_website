"use client"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f8] px-5 py-8 font-poppins">
      <div className="w-full max-w-[400px] rounded-2xl shadow-xl bg-white p-8">
        <h2 className="font-didot font-bold text-[2.5rem] text-center text-primary mb-6 tracking-widest">Login MUA</h2>
        <form action="be/login.php" method="POST" className="space-y-5">
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
          <button
            type="submit"
            className="bg-[#b79ea6] w-full py-2 rounded-full font-semibold text-white bg-primary hover:bg-[#8a6d75] transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 font-medium text-[#4a3f35]">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="text-primary font-bold hover:underline hover:text-primary-dark transition"
          >
            Daftar di sini
          </a>
        </p>
      </div>
      {/* Tambah style global untuk warna dan font custom */}
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
      `}</style>
    </div>
  );
}