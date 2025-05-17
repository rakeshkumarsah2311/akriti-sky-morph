
import Image from "next/image"
import agricultureNetsuite from "@/assets/agriculture-netsuite.jpg"

const AgricultureSuit = () => {
  return (
    <section className="pt-24">
      <div className="container">
     


        <div className="pt-14 relative">
          <div className="grid md:grid-cols-2 gap-y-10 gap-x-20">
            <figure className="max-md:order-last relative w-full h-[400] md:h-full md:translate-y-10">
              <Image
                alt="Image"
                src={agricultureNetsuite}
                fill
                className="object-contain"
              />
            </figure>


            <div className="text-muted-foreground text-balance">
              <h2 className="text-5xl font-semibold text-blue">Talent Solution </h2>
              <div className="space-y-5 font-secondary text-15 text-gray-800 mt-7">
                <p>
                At Akriti Sky Morph, we provide exceptional talent solutions designed to bridge the gap between your business and the skilled professionals who drive success. Our comprehensive approach to IT recruitment and staffing services ensures that businesses gain access to top-tier talent equipped with the expertise necessary to thrive in today’s dynamic technological landscape. From strategic workforce planning to recruitment for specialized roles, we help you build high-performing teams capable of achieving your business objectives with agility and precision.


                </p>
                <p>
                With a deep understanding of industry demands, we take pride in delivering talent that not only meets the technical requirements but also aligns with your organizational culture. Whether you’re expanding your tech workforce or enhancing your digital capabilities, our expert-driven solutions guarantee seamless integration of talent into your operations. At Akriti Sky Morph, we focus on long-term success by providing agile, compliant, and scalable staffing solutions that drive both efficiency and growth for your business.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default AgricultureSuit