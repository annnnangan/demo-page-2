import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <Link href="/services" className="mb-4 inline-flex items-center text-blue-200 hover:text-white">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Search Engine Optimization
            </h1>
            <p className="max-w-2xl text-lg text-blue-100">
              Dominate organic search results with proven strategies that drive sustainable, long-term growth.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Build Lasting Organic Visibility
                </h2>
                <p className="mb-6 text-gray-600">
                  Our SEO strategies combine technical excellence with compelling content to help your 
                  business rank higher in search results. We focus on sustainable, white-hat techniques 
                  that build authority over time.
                </p>
                <p className="mb-8 text-gray-600">
                  From technical audits to content optimization, link building to local SEO, we provide 
                  comprehensive solutions that drive real, measurable results for your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Get a Free SEO Audit
                </Link>
              </div>
              <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-12">
                <svg className="h-48 w-48 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Our SEO Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Technical SEO Audits",
                  description: "Comprehensive analysis of your site's technical health and performance.",
                },
                {
                  title: "On-Page Optimization",
                  description: "Content and meta optimization to improve relevance and rankings.",
                },
                {
                  title: "Link Building",
                  description: "Strategic outreach to build high-quality backlinks that boost authority.",
                },
                {
                  title: "Content Strategy",
                  description: "Data-driven content planning to capture valuable search traffic.",
                },
              ].map((service, index) => (
                <div key={index} className="rounded-xl bg-white p-6 shadow-lg">
                  <h3 className="mb-3 text-lg font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              SEO Results That Matter
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { stat: "312%", label: "Average Organic Traffic Increase" },
                { stat: "Top 3", label: "Rankings for Target Keywords" },
                { stat: "156%", label: "Improvement in Domain Authority" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-5xl font-bold text-blue-600">{item.stat}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
