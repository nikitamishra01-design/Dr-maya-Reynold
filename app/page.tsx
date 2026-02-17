// app/page.tsx

import About from "./About/page";
import CTA from "./CTA/page";
import Footer from "./Footer/page";
import Hero from "./Hero/page";
import Office from "./Office/page";
import Services from "./Services/page";


export default function Home() {
  return (
    <main className="bg-[#F4EFEA] text-[#1F3A5F] min-h-screen font-sans">
      <Hero />
      <About />
      <Services />
      <Office />
      <CTA />
      <Footer />
    </main>
  );
}
