"use client";

import Image from "next/image";
import AboutImage from "@/assets/about.webp";

const About = () => {
  return (
    <section id="about" className="container pt-32">
      <div className="text-center">
        <h2 className="text-5xl font-primary">
          About <span className="text-orange">Akriti Sky Morph</span>
        </h2>
        <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto font-secondary">
          At Akriti Sky Morph, we don&apos;t just consult — we empower. Bridging talent and technology, we design smart solutions that move businesses forward with precision and purpose.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 font-secondary mt-10 items-center max-w-5xl mx-auto">
        <figure className="relative w-full h-72 rounded-xl overflow-hidden">
          <Image src={AboutImage} alt="about us" fill className="object-cover" />
        </figure>

        <div>
          <div className="space-y-6 text-sm text-gray-600">
            <p>
              At Akriti Sky Morph, our core expertise lies in seamlessly integrating smart talent solutions with powerful business applications to drive transformative growth. We help organizations build agile, high-performing teams through precision-driven IT recruitment and staffing services tailored to evolving business needs. Simultaneously, our mastery in platforms like Salesforce, NetSuite, and Microsoft ERP enables us to deliver customized, scalable application solutions that streamline operations and enhance enterprise performance. By uniting the right people with the right systems, we empower businesses to move faster, operate smarter, and grow stronger.
            </p>

            <p>
              Helping companies buy, implement, and get the most value out of their business applications by delivering tailored solutions, seamless integrations, and ongoing support that drive operational excellence and measurable results.
            </p>

            <h4 className="text-xl">
              But enough about us — let’s talk about you, your vision, and how we can help turn it into reality.
            </h4>

            <button
              onClick={() =>
                (window.location.href =
                  "mailto:info@akritiskymorph.com?subject=Let's Connect&body=Hi Akriti Sky Morph Team,")
              }
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
