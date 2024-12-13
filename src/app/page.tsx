import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { FeatureSection } from "@/components/features-section";
import Footer from "@/components/footer";
import { Header} from "@/components/header";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    < div className=" flex flex-col justify-center pr-8 pl-8 pb-8 bg-gradient-to-r from-rose-100 to-teal-100">
      <Header />
      <Hero />
      <FeatureSection />
      <CtaSection />
      <Faq />
      <Footer />
    </div>
  );
}
