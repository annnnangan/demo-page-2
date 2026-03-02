import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProgrammaticPage() {
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
              Programmatic Advertising
            </h1>
            <p className="max-w-2xl text-lg text-blue-100">
              Reach your ideal audience at scale with automated, data-driven ad buying across display, video, and native formats.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Precision Targeting at Scale
                </h2>
                <p className="mb-6 text-gray-600">
                  Programmatic advertising uses real-time bidding and advanced algorithms to serve your 
                  ads to the right people, at the right time, on the right platform. We leverage data 
                  and automation to maximize your campaign efficiency.
                </p>
                <p className="mb-8 text-gray-600">
                  From display and video to native and connected TV, our programmatic strategies 
                  deliver measurable results across the entire customer journey.
                </p>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Start Your Campaign
                </Link>
              </div>
              <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-12">
                <svg className="h-48 w-48 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Our Programmatic Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Display Advertising",
                  description: "Eye-catching banner ads served across premium publisher networks.",
                },
                {
                  title: "Video Campaigns",
                  description: "Engaging pre-roll, mid-roll, and outstream video placements.",
                },
                {
                  title: "Native Advertising",
                  description: "Seamless ad experiences that match the look and feel of content.",
                },
                {
                  title: "Audience Targeting",
                  description: "Precise targeting using first-party, third-party, and contextual data.",
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
              Programmatic Performance
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { stat: "2.3M+", label: "Monthly Impressions Managed" },
                { stat: "78%", label: "Lower CPM vs Direct Buys" },
                { stat: "4.2x", label: "Average View-Through Rate" },
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
