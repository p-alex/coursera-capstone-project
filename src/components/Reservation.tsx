import { fetchAPI } from "../DummyApi";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <section className="pb-12 px-4">
      <div className="container">
        <div
          className="w-full h-[300px] bg-cover bg-center bg-no-repeat mb-4 rounded-2xl"
          style={{ backgroundImage: "url(/images/reservation.webp)" }}
        ></div>
        <ReservationForm fetchAPI={fetchAPI} />
      </div>
    </section>
  );
};

export default Reservation;
