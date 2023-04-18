const About = () => {
  return (
    <section className="py-16 px-4">
      <div className="container flex flex-col items-center min-[850px]:flex-row gap-12">
        <div>
          <h2 className="text-6xl font-bold">Little Lemon</h2>
          <p className="text-4xl mb-8 text-[#333333]">Chicago</p>
          <p className="text-xl text-justify max-w-[370px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className="relative w-full max-w-[450px] h-[450px] aspect-square">
          <img
            src="/images/restaurant-1.webp"
            width={271}
            className="absolute bottom-0 left-0 aspect-[0.80] object-cover"
            alt=""
          />
          <img
            src="/images/restaurant-2.webp"
            width={271}
            className="absolute top-0 right-0 aspect-[0.80] z-[1] object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
