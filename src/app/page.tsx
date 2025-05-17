import { Metadata } from "next";
import About from "./_components/about";
import AgricultureSuit from "./_components/agriculture-suit";
import ConsultingCards from "./_components/consulting-cards";
import CraftedERP from "./_components/crafted-erp";
import Hero from "./_components/hero";
import IconCards from "./_components/icon-cards";



export const metadata: Metadata = {
  title: 'Akriti Sky Morph ,Complete Solution ',
  description: 'At Akriti Sky Morph, we don&apos;t just consult — we empower. Bridging talent and technology, we design smart solutions that move businesses forward with precision and purpose',
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
