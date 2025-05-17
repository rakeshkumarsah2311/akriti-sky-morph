import Image from "next/image"
import CraftedErpDiagram from "@/assets/crafted-erp-diagram.jpg";

const CraftedERP = () => {
  return (
    <section id="services">
        <div className="pt-14 relative">
          <div className="grid md:grid-cols-2 gap-y-10 gap-x-20">
            <div >
              <h2 className="text-5xl font-semibold text-blue">Business ERP</h2>
              <div className="text-muted-foreground text-balance mt-7 space-y-5 font-secondary text-15 text-gray-800 leading-7">
                <p>
                At Akriti Sky Morph, we specialize in delivering top-tier Business ERP solutions designed to optimize your organization&apos;s operations. Our expertise spans industry-leading platforms such as Salesforce, NetSuite, and Microsoft ERP, ensuring that businesses leverage the right tools for seamless performance. Whether it&apos;s driving customer success with Salesforce or enabling operational efficiency through NetSuite, our team works closely with you to implement solutions that are tailored to your unique business needs. With a focus on precision and reliability, we ensure that your digital transformation is both smooth and impactful.
                </p>

                <p>
                  We take pride in offering comprehensive implementation and integration services for each ERP system, ensuring that your business applications not only align with your goals but also enhance them. Our expert consultants guide you through every step, from initial setup to ongoing support, ensuring that the systems scale as your business grows. At Akriti Sky Morph, we understand the complexity of modern business operations, and our ERP solutions are crafted to deliver long-term value, streamline workflows, and foster sustainable growth for your organization.
                </p>
              </div>
            </div>
            <figure className="relative w-full h-[400] md:h-full md:translate-y-10">
              <Image
                alt="Image"
                src={CraftedErpDiagram}
                fill
                className="object-contain"
              />
            </figure>

          </div>
        </div>
    </section>
  )
}

export default CraftedERP