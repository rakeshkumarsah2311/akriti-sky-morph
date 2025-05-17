import Image from "next/image";
import ImplementationImage from "@/assets/implementation.jpg";
import IntegrationImage from "@/assets/integration.jpg";

const ConsultingCards = () => {
  return (
    <section id="solutions" className="py-14">
      <div className="container mx-auto px-4">
        <h2 className="md:text-5xl text-3xl font-semibold text-center font-primary mb-6">
          Your Consulting Arm for Smart Staffing and Technology Solutions
        </h2>

        <p className="text-center text-base md:text-lg mb-6">
          <strong><em>Akriti Sky Morph</em></strong> is a strategic consulting arm specializing in smart staffing and advanced technology solutions. 
          We empower businesses with agile workforce strategies and cutting-edge digital innovations tailored to their unique goals. 
          With a strong focus on precision, scalability,performance and reliability.<strong><em>Akriti Sky Morph</em></strong> delivers end-to-end solutions that 
          drive operational excellence, enhance productivity, and support long-term growth in a competitive landscape.
        </p>

        <h5 className="text-center mt-8 font-medium font-secondary text-lg">
          It&apos;s What We Do. It&apos;s What We&apos;ve Always Done.
          <div>Let&apos;s See What We Can Do for You.</div>
        </h5>

        <div className="grid md:grid-cols-2 gap-y-8 gap-x-10 mt-10 max-w-5xl mx-auto">
          {/* Implementation Card */}
          <article className="rounded-lg overflow-hidden pb-7 bg-card text-card-foreground shadow-sm">
            <div className="relative h-72">
              <Image alt="Implementation" src={ImplementationImage} fill className="object-cover" />
            </div>
            <div className="px-4 pt-3">
              <h3 className="font-primary text-2xl font-semibold leading-none tracking-tight mt-3">
                Talent Solution
              </h3>
              <p className="font-secondary mt-3 text-gray-600 text-muted-foreground">
                At Akriti Sky Morph, our talent solutions are designed to bridge the critical gap between innovative technology and skilled human capital. We provide comprehensive support to help businesses scale with precision and speed. Our expertise in IT recruitment and staffing ensures organizations can access top-tier talent tailored to their needs. Whether you’re building a high-performance tech team or seeking specialized roles for digital transformation, our expert-led approach ensures compliance, efficiency, and sustainable growth. Empower your enterprise with smarter talent solutions, built for tomorrow.
              </p>
            </div>
          </article>

          {/* Integration Card */}
          <article className="rounded-lg overflow-hidden pb-7 bg-card text-card-foreground shadow-sm">
            <div className="relative h-72">
              <Image alt="Integration" src={IntegrationImage} fill className="object-cover" />
            </div>
            <div className="px-4 pt-3">
              <h3 className="font-primary text-2xl font-semibold leading-none tracking-tight mt-3">
                Business Application
              </h3>
              <p className="font-secondary mt-3 text-gray-600 text-muted-foreground">
                At Akriti Sky Morph, we offer specialized business application solutions that drive efficiency and innovation. Our team helps organizations implement and optimize enterprise resource planning (ERP) systems, like Microsoft Solutions and NetSuite, ensuring seamless integration with your existing infrastructure. With our expert guidance, we deliver custom applications that streamline workflows, improve data accuracy, and support business growth. Whether you&apos;re enhancing your digital infrastructure or introducing new solutions, we provide end-to-end support for a smooth and successful transformation.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ConsultingCards;
