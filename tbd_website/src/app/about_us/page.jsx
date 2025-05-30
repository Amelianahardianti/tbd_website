// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-[#faf8f8] text-[#4a3f35] min-h-screen pt-20 font-sans">
      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-playfair font-semibold mb-8">About MUAR</h2>
          <p className="text-[#5f4b4b] leading-relaxed mb-6">
            MUAR is a makeup artist reservation platform designed to help you feel confident on every special occasion.
            With a network of professional MUAs across various cities, we provide personalized service and the best quality with just a few clicks.
          </p>

          <h4 className="text-[#a4717b] font-semibold text-xl mt-6 mb-2">Our Vision</h4>
          <p className="text-[#5f4b4b] leading-relaxed mb-4">
            To become the most trusted platform for professional makeup services that are easy, fast, and of high quality.
          </p>

          <h4 className="text-[#a4717b] font-semibold text-xl mt-6 mb-2">Our Mission</h4>
          <ul className="list-disc pl-5 text-[#5f4b4b] mb-6">
            <li>Connecting clients with high-quality MUAs.</li>
            <li>Providing a practical and comfortable reservation experience.</li>
            <li>Supporting local MUAs to grow through technology.</li>
          </ul>

          <h4 className="text-[#a4717b] font-semibold text-xl mt-8 mb-4 text-center">Our Team</h4>
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            {[
              { name: 'Fadel', role: 'Founder', src: '/assets/tim5.jpg' },
              { name: 'Putri', role: 'Creative Director', src: '/assets/tim2.jpg' },
              { name: 'Amelia', role: 'Frontend Developer', src: '/assets/tim3.jpg' },
            ].map(({ name, role, src }) => (
              <div key={name} className="text-center max-w-[200px]">
                <Image
                  src={src}
                  alt={role}
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-[#e9d6d9] object-cover mx-auto"
                />
                <h6 className="text-[#5b3f45] font-semibold text-base mt-3">{name}</h6>
                <span className="text-sm text-[#8d7a7a]">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
