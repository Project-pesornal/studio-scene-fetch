import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Movies from "@/components/Movies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mt-[120px]">
        <Hero />
        <About />
        <Features />
        <Movies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
