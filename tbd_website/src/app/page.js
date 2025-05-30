import Head from 'next/head';
import { BsFilePerson } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - MUA</title>
        <link rel="stylesheet" href="/bootstrap-5.3.6-dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/halaman.css" />
      </Head>
      <main className="bg-[#FAF8F8] pt-20 text-[#4A3F35] font-poppins">
        {/* Main Title */}
        <h1 className="text-center font-playfair font-bold text-5xl md:text-6xl mt-20 mb-4 text-black animate-fade-down">BE FAST BE PRETTY</h1>
        <p className="text-center text-[#6e5a53] text-lg max-w-xl mx-auto mb-12">Makeup that is quick, neat, and beautiful for every special moment</p>

        {/* Highlight Section */}
        <div className="max-w-2xl mx-auto mb-16 px-4">
          <div className="relative bg-[#e9d6d9] rounded-2xl shadow-lg text-center px-8 py-10 overflow-hidden">
            <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-white/20 rounded-full"></div>
            <div className="absolute bottom-[-30px] left-[-30px] w-[100px] h-[100px] bg-white/20 rounded-full"></div>
            <h3 className="text-[#5b3d45] font-playfair text-2xl font-semibold mb-4 relative z-10">Professional Makeup for Your Most Beautiful Day</h3>
            <p className="text-[#7a5c63] text-lg mb-6 relative z-10">With expert touch and personal service, we ensure you look stunning.</p>
            <a href="/MUA_Reservation" className="bg-[#b79ea6] hover:bg-[#8a6d75] text-white font-semibold rounded-full py-3 px-8 text-lg inline-block relative z-10 transition-all shadow-md hover:-translate-y-1">Reservation Now</a>
          </div>
        </div>

        {/* Features Section */}
        <section className="container mx-auto px-4 mb-24">
          <h2 className="text-center font-playfair font-semibold text-3xl mb-12">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center font-medium max-w-xs p-6 transition-transform hover:-translate-y-1">
              <div className="text-4xl bg-white p-6 rounded-xl shadow-md mb-4 text-black">
                <BsFilePerson />
              </div>
              <h5 className="text-lg font-semibold">Professional</h5>
              <p className="text-sm text-black">Experienced and skilled MUAs in their field.</p>
            </div>
            <div className="text-center font-medium max-w-xs p-6 transition-transform hover:-translate-y-1">
              <div className="text-4xl bg-white p-6 rounded-xl shadow-md mb-4 text-[#b79ea6]">
                <BsClockHistory />
              </div>
              <h5 className="text-lg font-semibold">Flexible Time</h5>
              <p className="text-sm text-black">You can book according to your preferred schedule.</p>
            </div>
            <div className="text-center font-medium max-w-xs p-6 transition-transform hover:-translate-y-1">
              <div className="text-4xl bg-white p-6 rounded-xl shadow-md mb-4 text-[#b79ea6]">
                <BsFillHeartFill />
              </div>
              <h5 className="text-lg font-semibold">Personalized Service</h5>
              <p className="text-sm text-black">We always give special attention to you.</p>
            </div>
          </div>
        </section>

        {/* MUA Join Section */}
        <section className="bg-gradient-to-r from-[#b79ea6] to-[#8a6d75] text-white py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1350')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-4">Are You a Makeup Artist?</h2>
            <p className="text-lg max-w-xl mx-auto mb-6 opacity-90">Join our network of professional MUAs and get access to premium clients, flexible scheduling, and competitive earnings.</p>
            <a href="/register" className="bg-white text-[#b79ea6] font-semibold rounded-full py-3 px-8 text-lg transition-all hover:bg-gray-100 shadow-md inline-block">
              <i className="bi bi-person-plus-fill me-2"></i>Register as MUA
            </a>
            <p className="mt-4">Already have an account? <a href="/login" className="underline text-white">Login here</a></p>
          </div>
        </section>
      </main>
    </>
  );
}