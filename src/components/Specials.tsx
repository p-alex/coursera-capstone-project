import Card from "./Card";

const Specials = () => {
  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl">Specials</h2>
          <button className="button primaryButton">Online Menu</button>
        </div>
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
        >
          <Card
            image={"/images/greeksalad.webp"}
            title={"Greek Salad"}
            price={"12.99"}
            description={
              "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            }
          />
          <Card
            image={"/images/bruchetta.webp"}
            title={"Bruchetta"}
            price={"5.99"}
            description={
              "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
            }
          />
          <Card
            image={"/images/lemonDessert.webp"}
            title={"Lemon Dessert"}
            price={"5.00"}
            description={
              "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Specials;
