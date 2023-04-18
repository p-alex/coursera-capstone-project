import { Link } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";

interface Props {
  image: string;
  title: string;
  price: string;
  description: string;
}

const Card = ({ image, title, price, description }: Props) => {
  return (
    <article className="relative rounded-t-2xl overflow-hidden shadow flex flex-col">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center w-full aspect-[4/3]"
      ></div>
      <div className="flex flex-col gap-4 p-6 bg-white flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-[22px]">{title}</h3>
          <p className="font-bold text-[#EE9972]">${price}</p>
        </div>
        <p className="flex-1 h-[144px]">{description}</p>
        <Link
          to="/"
          className="flex gap-2 items-center font-bold hover:underline"
        >
          Order a delivery <MdDeliveryDining className="w-[20px] h-[20px]" />
        </Link>
      </div>
    </article>
  );
};

export default Card;
