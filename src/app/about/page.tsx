import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    bio: "15+ years in digital marketing. Former Google and Facebook.",
  },
  {
    name: "Michael Torres",
    role: "Head of SEM",
    bio: "Google Ads certified expert. Managed $50M+ in ad spend.",
  },
  {
    name: "Emily Park",
    role: "SEO Director",
    bio: "Technical SEO specialist with enterprise experience.",
  },
  {
    name: "David Kim",
    role: "Programmatic Lead",
    bio: "Former DSP engineer turned media strategist.",
  },
];

const values = [
  {
    title: "Data-Driven Decisions",
    description: "Every strategy backed by analytics. No guesswork.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Radical Transparency",
    description: "Real-time reporting. You see everything we see.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Partnership Mindset",
    description: "Your success is our success. We grow together.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Continuous Innovation",
    description: "Always testing, learning, and improving.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-20">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              About GrowthLab
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-blue-100">
              We&apos;re a team of digital marketing experts obsessed with driving measurable results
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Story</h2>
                <p className="mb-4 text-gray-600">
                  Founded in 2018, GrowthLab started with a simple mission: help businesses 
                  grow through smart, data-driven marketing. We were frustrated by agencies 
                  that prioritized vanity metrics over real business results.
                </p>
                <p className="mb-4 text-gray-600">
                  Today, we&apos;ve helped over 200 businesses across e-commerce, SaaS, and 
                  professional services achieve sustainable growth. Our team combines deep 
                  platform expertise with strategic thinking to deliver campaigns that actually move the needle.
                </p>
                <p className="text-gray-600">
                  We believe in transparency, accountability, and treating your budget like 
                  it&apos;s our own money. That&apos;s why 90% of our clients stay with us year after year.
                </p>
              </div>
              <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-12">
                <div className="text-center text-white">
                  <div className="mb-4 text-6xl font-bold">200+</div>
                  <div className="text-xl text-blue-100">Businesses Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Our Values</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="rounded-xl bg-white p-6 shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Meet the Team</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-4xl text-white">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="mb-2 text-sm font-medium text-blue-600">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Certifications & Partners</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "Google Premier Partner", description: "Top 3% of Google Ads agencies globally" },
                { title: "Meta Business Partner", description: "Certified Facebook & Instagram expertise" },
                { title: "Microsoft Advertising Partner", description: "Elite Bing Ads management" },
              ].map((cert, index) => (
                <div key={index} className="rounded-xl bg-white p-6 text-center shadow-lg">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Ready to Work Together?</h2>
            <p className="mb-8 text-lg text-blue-100">
              Let&apos;s discuss how we can help accelerate your growth.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
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
