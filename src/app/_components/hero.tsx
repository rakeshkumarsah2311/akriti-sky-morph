const Hero = () => {
  return (
    <section className="bg-black h-[800px] md:h-[87vh] max-h-[1000px] pb-10 relative overflow-hidden">
      <div className="container relative z-10 text-white flex flex-col h-full items-center justify-center">
        
        {/* Heading */}
        <article className="text-center font-primary">
          <h1 className="text-4xl font-semibold tracking-tight md:text-8xl">
            Akriti Sky Morph
          </h1>
        </article>

        {/* Paragraph with 2-line distance (mt-8) */}
        <p className="md:text-lg w-full text-balance max-w-2xl text-center mt-8 font-secondary">
          We at Akriti Sky Morph help close the gap between technology and talent.
          We offer end-to-end support to help businesses scale with accuracy and agility.
          Our areas of expertise include Microsoft Solutions, ERP Implementation, IT Recruitment, and Staffing Services.
        </p>
      </div>

      {/* Background Video */}
      <video muted autoPlay loop className="absolute w-full h-full inset-0 object-cover">
        <source src="/hero-video.mp4" />
      </video>
    </section>
  );
};

export default Hero;
