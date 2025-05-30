"use client"

export default function DashboardMUA() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md py-2">
        <div className="container mx-auto flex items-center justify-between px-4">
          <a className="flex items-center gap-2" href="/dashboardmua">
            <div
              className="w-10 h-10 bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: "url('/assets/logo-muar.png')" }}
            ></div>
            <div>
              <div className="font-playfair font-bold text-[1.3rem] lowercase text-primary">
                muar
              </div>
              <div className="text-[0.65rem] tracking-wider font-semibold text-primary -mt-1">
                BE FAST BE PRETTY
              </div>
            </div>
          </a>
          <button
            className="lg:hidden focus:outline-none"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => {
              const nav = document.getElementById("navbarNavDashboard");
              nav.classList.toggle("hidden");
            }}
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div
            id="navbarNavDashboard"
            className="hidden lg:flex lg:items-center lg:gap-2"
          >
            <ul className="flex flex-col lg:flex-row items-center gap-2">
              <li>
                <a className="nav-link-active relative px-4 py-2 font-semibold text-primary-dark hover:text-primary transition-colors" href="/dashboardmua">
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a className="relative px-4 py-2 font-semibold text-primary-dark hover:text-primary transition-colors" href="/permintaan_reservasi">
                  Reservation Requests
                </a>
              </li>
              <li>
                <a className="relative px-4 py-2 font-semibold text-primary-dark hover:text-primary transition-colors" href="/about_us">
                  About Us
                </a>
              </li>
              <li>
                <a className="relative px-4 py-2 font-semibold text-primary-dark hover:text-primary transition-colors" href="/profile">
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/logout"
                  className="ml-0 lg:ml-3 bg-primary text-white rounded-full px-6 py-2 font-semibold shadow hover:bg-primary-dark transition"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-xl mx-auto mt-32 mb-24 bg-white rounded-2xl px-8 py-12 shadow-2xl text-center font-playfair font-semibold text-[1.8rem] text-primary">
        Welcome to your dashboard,
        <span className="block mt-4 font-normal text-[1.1rem] text-[#5b3f45]">
          Manage your reservations and profile here.
        </span>
      </div>

      {/* Custom Styles for Tailwind (add in globals.css or tailwind.config.js) */}
      <style jsx global>{`
        :root {
          --primary: #b79ea6;
          --primary-dark: #8a6d75;
        }
        .text-primary { color: var(--primary); }
        .text-primary-dark { color: var(--primary-dark); }
        .bg-primary { background-color: var(--primary); }
        .bg-primary-dark { background-color: var(--primary-dark); }
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>
    </>
  );
}