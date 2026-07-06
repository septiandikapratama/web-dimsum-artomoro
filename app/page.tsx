import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import BestSeller from "@/components/BestSeller";
import Menu from "@/components/Menu";
import Dapur from "@/components/Dapur";
import Outlet from "@/components/Outlet";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import ScallopDivider from "@/components/ui/ScallopDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <BestSeller />
      <ScallopDivider toDark />
      <Menu />
      <ScallopDivider />
      <Dapur />
      <Outlet />
      <CtaFinal />
      <Footer />
    </>
  );
}
