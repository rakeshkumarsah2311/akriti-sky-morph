import { Metadata } from "next";
import About from "./_components/about";
import AgricultureSuit from "./_components/agriculture-suit";
import ConsultingCards from "./_components/consulting-cards";
import CraftedERP from "./_components/crafted-erp";
import Hero from "./_components/hero";
import IconCards from "./_components/icon-cards";



export const metadata: Metadata = {
  title: 'Doozy Solutions | NetSuite Experts With a Twist',
  description: 'Doozy Solutions is a NetSuite implementation, product development and managed services firm with offices in Colorado and Sydney. Doozy is focused on making sure its clients receive the maximum ROI from their investments in NetSuite ERP software. The company also has two software products targeting historically underserved verticals: Crafted ERP for craft beverage manufacturing and NetSuite for Agriculture for crop farmers and other food producers.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ConsultingCards />
      <CraftedERP />
      <AgricultureSuit />
      <About />
      <IconCards />
      
    </>
  );
}
