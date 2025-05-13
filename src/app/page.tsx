import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center">
      <section className="py-12 bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold mb-6 text-blue-400">Welcome to WebRefresh Digital</h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          We specialize in transforming outdated SME websites into modern, high-performing digital assets using cutting-edge AI and automation, paving the way for your passive income.
        </p>
        <Link href="/services" legacyBehavior>
          <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Discover Our Packages
          </a>
        </Link>
      </section>

      <section className="py-16">
        <h2 className="text-4xl font-semibold mb-10 text-blue-300">Why Choose Automation for Your Website?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow">
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">Rapid Modernization</h3>
            <p className="text-gray-400">
              Leverage AI to get a stunning, modern website in days, not months. We turn your vision into reality with unprecedented speed and efficiency.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow">
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">Passive Income Focus</h3>
            <p className="text-gray-400">
              Our solutions are designed for minimal ongoing effort from your side. Subscription-based maintenance and automated features ensure your site works for you, 24/7.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow">
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">Affordable & Scalable</h3>
            <p className="text-gray-400">
              Benefit from cost-effective development thanks to automation. Our tiered packages grow with your business, ensuring you always have the right solution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-800 rounded-lg shadow-xl mt-10">
        <h2 className="text-4xl font-semibold mb-8 text-blue-300">Ready to Refresh Your Digital Presence?</h2>
        <p className="text-lg mb-8 text-gray-300 max-w-xl mx-auto">
          Let us help you unlock new opportunities with a website that truly represents your business and works tirelessly to achieve your goals.
        </p>
        <Link href="/contact" legacyBehavior>
          <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get a Free Consultation
          </a>
        </Link>
      </section>
    </div>
  );
}

