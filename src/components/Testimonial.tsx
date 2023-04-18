import { AiFillStar } from "react-icons/ai";

interface Props {
  raiting: string;
  image: string;
  name: string;
  text: string;
}

const Testimonial = ({ raiting, image, name, text }: Props) => {
  return (
    <div className="flex flex-col gap-4 py-6 px-5 bg-white rounded-xl">
      <p className="flex items-center gap-1 text-sm">
        Rating: <span className="font-semibold">{raiting}</span>{" "}
        <AiFillStar className="w-[15px] h-[15px] text-yellow-500" />
      </p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          width={46}
          alt=""
          className="block aspect-square object-cover rounded-full"
        />
        <p className="font-bold text-sm">{name}</p>
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Testimonial;
