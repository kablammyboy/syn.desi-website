import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Why } from "@/components/site/why";
import { Excellence } from "@/components/site/excellence";
import { Services } from "@/components/site/services";
import { Coverage } from "@/components/site/coverage";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Why />
        <Excellence />
        <Services />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
