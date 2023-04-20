import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#495E57] py-16 px-4 text-white min-[900px]:mb-16">
      <div className="container flex gap-12 flex-col items-center min-[900px]:flex-row">
        <div className="flex flex-col gap-1">
          <div className="text-center min-[900px]:text-left">
            <h1 className="font-semibold text-[56px] text-[#F4CE14] leading-8 mb-4">
              Little Lemon
            </h1>
            <p className="text-[32px] mb-1">Chicago</p>
            <p className="text-[20px] max-w-[422px] mb-12">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/reserve" className="button primaryButton">
              Reserve a Table
            </Link>
          </div>
        </div>
        <div
          className="relative min-[900px]:absolute right-0 top-0 w-full max-w-[375px] aspect-[9/10] bg-cover bg-center bg-no-repeat rounded-2xl"
          style={{ backgroundImage: "url(/images/heroImage.webp)" }}
        />
      </div>
    </section>
  );
};

export default Hero;
