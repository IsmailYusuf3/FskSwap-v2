import Navbar from '../../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white pt-20">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-yellow-400 mb-6">About Fressking (FSK)</h1>
        <section className="mb-6">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            At Fressking (FSK), we’re building more than a DeFi ecosystem — we’re laying the foundation for a complete financial and technological evolution that scales beyond decentralized finance into Centralized Exchange (CEX) and Blockchain infrastructure.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            Our vision is simple: to make finance truly borderless, transparent, and rewarding for everyone — from early crypto adopters to global investors.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            Fressking isn’t driven by hype, but by purpose. Every token, every feature, and every roadmap milestone is designed to create real value and utility across the DeFi–CEX–Blockchain spectrum.
          </p>
        </section>
        {/* Add remaining sections as needed, ensuring proper closing */}
      </div>
    </div>
  );
}
