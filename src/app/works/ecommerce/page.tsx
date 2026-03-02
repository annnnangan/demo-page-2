import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EcommerceCaseStudy() {
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
              E-commerce
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Fashion Retailer Growth
            </h1>
            <p className="max-w-2xl text-lg text-blue-100">
              How we increased online revenue by 485% through strategic SEM and remarketing campaigns
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { value: "485%", label: "Revenue Increase" },
                { value: "3.2x", label: "ROAS" },
                { value: "67%", label: "Lower CPA" },
                { value: "2.1M", label: "Monthly Impressions" },
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
              A mid-sized fashion retailer was struggling to compete with larger brands in the online space. 
              Their previous marketing efforts had yielded inconsistent results, and they needed a data-driven 
              approach to maximize their ad spend efficiency while scaling their revenue.
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Approach</h2>
            <div className="mb-8 space-y-4">
              {[
                {
                  title: "Comprehensive Audit",
                  description: "We conducted a thorough analysis of their existing campaigns, identifying areas of wasted spend and missed opportunities.",
                },
                {
                  title: "Strategic Restructuring",
                  description: "Rebuilt their Google Ads account with a focus on high-intent keywords and audience segmentation.",
                },
                {
                  title: "Dynamic Remarketing",
                  description: "Implemented sophisticated remarketing campaigns showing users the exact products they viewed.",
                },
                {
                  title: "Continuous Optimization",
                  description: "Weekly optimization cycles with A/B testing of ad copy, landing pages, and bidding strategies.",
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
              Within 6 months, the client saw a 485% increase in online revenue while reducing their cost 
              per acquisition by 67%. The remarketing campaigns alone generated a 3.2x return on ad spend, 
              turning abandoned carts into paying customers.
            </p>

            <div className="rounded-2xl bg-blue-50 p-8">
              <blockquote className="text-lg italic text-gray-700">
                &ldquo;GrowthLab transformed our digital marketing. We went from struggling to compete to 
                becoming a market leader in our category. Their data-driven approach and constant 
                optimization made all the difference.&rdquo;
              </blockquote>
              <p className="mt-4 font-semibold text-gray-900">— Marketing Director, Fashion Retailer</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Want Similar Results?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Let&apos;s discuss how we can help grow your e-commerce business.
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
