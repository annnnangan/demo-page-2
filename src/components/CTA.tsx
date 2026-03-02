import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="bg-blue-600 px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Ready to Accelerate Your Growth?
        </h2>
        <p className="mb-10 text-lg text-blue-100">
          Let&apos;s discuss how our data-driven marketing strategies can help you achieve
          your business goals.
        </p>
        <Link
          href="#"
          className="inline-block rounded-full bg-white px-10 py-4 text-lg font-semibold text-blue-600 transition-colors hover:bg-blue-50"
        >
          Schedule a Free Consultation
        </Link>
      </div>
    </section>
  );
}
