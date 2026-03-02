import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SEMPage() {
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
              Search Engine Marketing
            </h1>
            <p className="max-w-2xl text-lg text-blue-100">
              Maximize your visibility with targeted paid search campaigns that drive qualified traffic and conversions.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Drive Immediate Results with Paid Search
                </h2>
                <p className="mb-6 text-gray-600">
                  Our SEM experts craft high-converting campaigns across Google Ads, Microsoft Advertising, 
                  and other platforms. We focus on maximizing your ROI through strategic keyword targeting, 
                  compelling ad copy, and continuous optimization.
                </p>
                <p className="mb-8 text-gray-600">
                  Whether you&apos;re looking to increase brand awareness, drive website traffic, or generate 
                  leads and sales, our data-driven approach ensures every dollar of your ad spend works harder.
                </p>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Get a Free SEM Audit
                </Link>
              </div>
              <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-12">
                <svg className="h-48 w-48 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Our SEM Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Google Ads Management",
                  description: "Full-service campaign management including Search, Display, and YouTube ads.",
                },
                {
                  title: "Shopping Campaigns",
                  description: "Product listing ads that showcase your inventory to ready-to-buy customers.",
                },
                {
                  title: "Remarketing Strategies",
                  description: "Re-engage visitors who left without converting with targeted follow-up ads.",
                },
                {
                  title: "Conversion Optimization",
                  description: "Landing page testing and optimization to maximize your conversion rates.",
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
              Why Our SEM Delivers Results
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { stat: "485%", label: "Average ROAS Improvement" },
                { stat: "67%", label: "Lower Cost Per Acquisition" },
                { stat: "3.2x", label: "Increase in Qualified Leads" },
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
