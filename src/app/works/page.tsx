import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    category: "E-commerce",
    slug: "ecommerce",
    title: "Fashion Retailer Growth",
    description:
      "Increased online revenue by 485% through strategic SEM and remarketing campaigns for a leading fashion brand.",
    image: "🛒",
    stats: [
      { value: "485%", label: "Revenue Increase" },
      { value: "3.2x", label: "ROAS" },
    ],
  },
  {
    category: "Banner Ads",
    slug: "banner-ads",
    title: "Tech Product Launch",
    description:
      "Generated 2.3M impressions and 15,000 qualified leads through programmatic display for a tech startup.",
    image: "📊",
    stats: [
      { value: "2.3M", label: "Impressions" },
      { value: "15K", label: "Leads Generated" },
    ],
  },
];

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-20">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Our Work
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-blue-100">
              See how we&apos;ve helped businesses achieve remarkable growth through data-driven marketing
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/works/${project.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex h-64 items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-8xl">
                    {project.image}
                  </div>
                  <div className="p-8">
                    <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                      {project.category}
                    </span>
                    <h2 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-blue-600">
                      {project.title}
                    </h2>
                    <p className="mb-6 text-gray-600">{project.description}</p>
                    <div className="mb-4 flex gap-8">
                      {project.stats.map((stat, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center font-semibold text-blue-600 group-hover:text-blue-700">
                      View Case Study
                      <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Let&apos;s discuss how we can help you achieve similar results.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
