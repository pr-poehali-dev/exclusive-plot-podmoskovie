import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import SaleReason from "@/components/sections/SaleReason";
import LegalInfo from "@/components/sections/LegalInfo";
import PriceValue from "@/components/sections/PriceValue";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import CallToAction from "@/components/sections/CallToAction";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <SaleReason />
      <LegalInfo />
      <PriceValue />
      <Gallery />
      <Location />
      <CallToAction />
    </div>
  );
}