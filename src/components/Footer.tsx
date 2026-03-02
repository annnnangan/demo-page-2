import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-16 text-gray-400">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block text-2xl font-bold text-white">
              GrowthLab
            </Link>
            <p className="text-sm">
              Your trusted partner in digital marketing excellence. We deliver data-driven
              strategies that fuel business growth.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-white">
                  Search Engine Marketing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white">
                  Programmatic Advertising
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Our Work</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#projects" className="hover:text-white">
                  E-commerce Projects
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white">
                  Banner Campaigns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Marketing Street</li>
              <li>San Francisco, CA 94102</li>
              <li>(415) 555-1234</li>
              <li>
                <a href="mailto:hello@growthlab.com" className="hover:text-white">
                  hello@growthlab.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          © 2025 GrowthLab Marketing Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
