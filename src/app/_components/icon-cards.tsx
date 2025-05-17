import Image from "next/image";
import ServiceIcon from "@/assets/service-icon.svg";
import SupportIcon from "@/assets/support-icon.svg";

const IconCards = () => {

  return (
    <section className="container pt-14">
    <div className="grid gap-x-10 mt-7 gap-y-10 md:grid-cols-2 max-w-5xl mx-auto">
      <div className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-sm">
        <div className="p-6 flex flex-col gap-4">
          <div className="relative">
            <Image alt="Image" src={ServiceIcon} height={120} width={120} className="object-contain" />
          </div>
          <h3 className="text-2xl font-semibold leading-none tracking-tight mt-2">
            NetSuite Implementation
          </h3>
          <p className="text-15 text-gray-600 font-secondary">
          At Akriti Sky Morph, NetSuite Implementation isn’t just a process — it’s a transformation.
We combine deep platform expertise with a business-first approach to configure, customize, and deploy NetSuite in a way that aligns perfectly with your growth vision. From initial setup to go-live and beyond, our consultants ensure every module, every integration, and every workflow is optimized for performance, scalability, and long-term success. With us, your digital foundation becomes smarter, faster, and future-ready.
          </p>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-sm">
        <div className="p-6 flex flex-col gap-4">
          <div className="relative">
            <Image alt="Image" src={SupportIcon} height={120} width={120} className="object-contain" />
          </div>
          <h3 className="text-2xl font-semibold leading-none tracking-tight mt-2">
          Netsuite Integration
          </h3>
          <p className="text-15 text-gray-600 font-secondary">
Our NetSuite Integration services are designed to seamlessly connect your core business systems — whether it’s CRM, eCommerce, HR, or custom applications — with the power of NetSuite. We build smart, secure, and scalable integrations that eliminate silos, streamline operations, and enable real-time visibility across your enterprise. With our integration expertise, your entire tech ecosystem performs as one unified engine — agile, efficient, and built for growth.No matter how complex your systems are, we simplify the connections so your business runs smoother, faster, and smarter.


          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default IconCards