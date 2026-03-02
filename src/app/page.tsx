import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProjects from "@/components/FeaturedProjects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <FeaturedProjects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
