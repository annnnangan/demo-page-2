import Link from "next/link";

const projects = [
  {
    category: "E-commerce",
    title: "Fashion Retailer Growth",
    description:
      "Increased online revenue by 485% through strategic SEM and remarketing campaigns.",
    image: "🛒",
    link: "#",
  },
  {
    category: "Display Advertising",
    title: "Tech Product Launch",
    description:
      "Generated 2.3M impressions and 15,000 qualified leads through programmatic display.",
    image: "📊",
    link: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            See how we&apos;ve helped businesses achieve remarkable growth
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-8xl">
                {project.image}
              </div>
              <div className="p-8">
                <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  {project.category}
                </span>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-700"
                >
                  {project.category === "E-commerce" ? "View Case Study" : "View Campaign"}
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
