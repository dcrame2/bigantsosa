import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Content from "@/components/Content";
import Socials from "@/components/Socials";
import InstaCal from "@/components/InstaCal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-neon/5 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple/5 blur-[150px] pointer-events-none" />

      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Content />
      <Socials />
      <InstaCal />
      <Footer />
    </main>
  );
}
