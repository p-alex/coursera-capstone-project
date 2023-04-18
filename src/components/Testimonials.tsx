import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-[#495E57]">
      <div className="container">
        <h2 className="text-4xl text-center mb-24 text-white">Testiomonials</h2>
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          }}
        >
          <Testimonial
            raiting="4.9"
            image="/images/angela.webp"
            name="Angela"
            text="This cozy restaurant has left the best impressions!"
          />
          <Testimonial
            raiting="4.5"
            image="/images/ethan.webp"
            name="Ethan"
            text="It’s a great experience. The ambiance is very welcoming and charming."
          />
          <Testimonial
            raiting="4.9"
            image="/images/sergio.webp"
            name="Sergio"
            text="Excellent food. Menu is extensive and seasonal to a particularly high standard."
          />
          <Testimonial
            raiting="5"
            image="/images/jonas.webp"
            name="Jonas"
            text="Amazing experience! If you thought gourmet kitchen will leave you hungry, think again."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
