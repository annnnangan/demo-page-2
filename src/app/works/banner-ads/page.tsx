import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BannerAdsCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <Link href="/works" className="mb-4 inline-flex items-center text-blue-200 hover:text-white">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Our Work
            </Link>
            <span className="mb-4 inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white">
              Banner Ads
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Tech Product Launch
            </h1>
            <p className="max-w-2xl text-lg text-blue-100">
              How we generated 2.3M impressions and 15,000 qualified leads through programmatic display
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { value: "2.3M", label: "Impressions" },
                { value: "15K", label: "Qualified Leads" },
                { value: "$4.20", label: "Cost Per Lead" },
                { value: "4.8%", label: "CTR" },
              ].map((stat, index) => (
                <div key={index} className="rounded-xl bg-gray-50 p-6 text-center">
                  <div className="mb-2 text-4xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">The Challenge</h2>
            <p className="mb-8 text-lg text-gray-600">
              A B2B tech startup was preparing to launch their flagship product and needed to generate 
              awareness and qualified leads in a competitive market. They had a limited budget and 
              needed to maximize every impression to reach decision-makers at target companies.
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Approach</h2>
            <div className="mb-8 space-y-4">
              {[
                {
                  title: "Audience Research",
                  description: "Deep dive into their ideal customer profile to build precise targeting segments using firmographic and behavioral data.",
                },
                {
                  title: "Creative Strategy",
                  description: "Developed multiple banner variations optimized for different stages of the buyer journey.",
                },
                {
                  title: "Programmatic Execution",
                  description: "Leveraged DSPs to access premium inventory and optimize in real-time for conversions.",
                },
                {
                  title: "Landing Page Optimization",
                  description: "Created dedicated landing pages with clear value propositions and frictionless lead capture.",
                },
              ].map((item, index) => (
                <div key={index} className="rounded-lg border-l-4 border-blue-600 bg-gray-50 p-4">
                  <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="mb-6 text-3xl font-bold text-gray-900">The Results</h2>
            <p className="mb-8 text-lg text-gray-600">
              The campaign generated over 2.3 million impressions across premium tech and business 
              publications, resulting in 15,000 qualified leads at a cost per lead of just $4.20. 
              The click-through rate of 4.8% was 3x the industry average.
            </p>

            <div className="rounded-2xl bg-blue-50 p-8">
              <blockquote className="text-lg italic text-gray-700">
                &ldquo;The results exceeded our expectations. GrowthLab&apos;s programmatic strategy gave us 
                the reach we needed while keeping costs under control. The quality of leads was 
                exceptional — these were real decision-makers at our target accounts.&rdquo;
              </blockquote>
              <p className="mt-4 font-semibold text-gray-900">— CMO, Tech Startup</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Planning a Product Launch?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Let&apos;s discuss how programmatic advertising can amplify your launch.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
