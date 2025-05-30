import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="text-[#4A3F35] font-poppins fixed top-0 w-full z-50 bg-white/95 backdrop-blur shadow-md py-2">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-center bg-contain bg-no-repeat"></div>
                    <Image
                        src="/assets/logo-muar.png"
                        alt="MUAR Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <div className="font-playfair font-bold text-lg text-[#b79ea6] leading-none">muar</div>
                        <div className="text-[0.65rem] tracking-wider font-semibold text-[#b79ea6] -mt-1">BE FAST BE PRETTY</div>
                    </div>
                </a>
                <div className="hidden md:flex gap-4 items-center">
                    <a
                        href="/"
                        className="hover:text-[#b79ea6] relative after:block after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:bg-[#b79ea6] after:absolute after:left-0 after:-bottom-1 font-semibold text-sm"
                    >
                        Home
                    </a>
                    <a
                        href="/MUA_Reservation"
                        className="hover:text-[#b79ea6] relative after:block after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:bg-[#b79ea6] after:absolute after:left-0 after:-bottom-1 font-semibold text-sm"
                    >
                        MUA Reservation
                    </a>
                    <a
                        href="/MUA_Schedule"
                        className="hover:text-[#b79ea6] relative after:block after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:bg-[#b79ea6] after:absolute after:left-0 after:-bottom-1 font-semibold text-sm"
                    >
                        MUA Schedule
                    </a>
                    <a
                        href="/about_us"
                        className="hover:text-[#b79ea6] relative after:block after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:bg-[#b79ea6] after:absolute after:left-0 after:-bottom-1 font-semibold text-sm"
                    >
                        About us
                    </a>
                    <a
                        href="/login"
                        className="ml-4 bg-[#b79ea6] hover:bg-[#8a6d75] text-white font-semibold rounded-full py-2 px-6 transition-all"
                    >
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}