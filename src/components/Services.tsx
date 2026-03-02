import Link from "next/link";

const services = [
  {
    title: "Search Engine Marketing",
    description:
      "Maximize your visibility with targeted Google Ads and Bing Ads campaigns. We optimize every dollar spent to drive qualified traffic and conversions.",
    features: [
      "Google Ads Management",
      "Shopping Campaigns",
      "Remarketing Strategies",
      "Conversion Rate Optimization",
    ],
    icon: (
      <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Search Engine Optimization",
    description:
      "Dominate organic search results with our proven SEO strategies. We combine technical expertise with content excellence to improve your rankings.",
    features: [
      "Technical SEO Audits",
      "On-Page Optimization",
      "Link Building Campaigns",
      "Content Strategy",
    ],
    icon: (
      <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Programmatic Advertising",
    description:
      "Reach your ideal audience at scale with automated, data-driven ad buying across display, video, and native formats.",
    features: [
      "Display Advertising",
      "Video Campaigns",
      "Native Advertising",
      "Audience Targeting",
    ],
    icon: (
      <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Core Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Comprehensive digital marketing solutions tailored to your business goals
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mb-6 text-gray-600">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="mr-2 h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#cta"
                className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
              >
                Learn More
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
