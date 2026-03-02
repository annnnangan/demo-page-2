import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
          Transform Your Digital Presence with{" "}
          <span className="text-blue-600">Data-Driven Marketing</span>
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600 md:text-xl">
          We help businesses grow through strategic SEM, SEO, and programmatic advertising
          campaigns that deliver real, measurable results.
        </p>

        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#cta"
            className="w-full rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
          >
            Get Started
          </Link>
          <Link
            href="#services"
            className="w-full rounded-full border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition-colors hover:bg-blue-50 sm:w-auto"
          >
            Our Services
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-2 text-4xl font-bold text-blue-600">150+</div>
            <div className="text-gray-600">Clients Served</div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-2 text-4xl font-bold text-blue-600">$50M+</div>
            <div className="text-gray-600">Ad Spend Managed</div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-2 text-4xl font-bold text-blue-600">320%</div>
            <div className="text-gray-600">Avg. ROI Increase</div>
          </div>
        </div>
      </div>
    </section>
  );
}
