import "./Home.css";
import IntroItem from "./IntroItem";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="home-heading">
        <div className="heading">
          <img className="round-img" src="./src/assets/logo.jpg" alt="logo" />
          <h1 className="title">From Dusk Till Dawn</h1>
        </div>
        <div className="fancy">
          <h2 className="big-h2">
            Where wholesome <br /> ingredients meet delicious flavors.
          </h2>

          <button className="text-button">
            <Link to="/menu">
              Menu <span>{">"}</span>
            </Link>
          </button>
        </div>
      </header>
      <main>
        <article className="intro-grid">
          {INTRO_INFO.map((item) => (
            <IntroItem key={item.image} item={item} />
          ))}
        </article>
        <article className="button-flex">
          <Link to="/menu">
            <button className="button">Order from us</button>
          </Link>
        </article>
      </main>
    </>
  );
}

export default Home;

const INTRO_INFO = [
  {
    image: "food-1",
    title: "Health & Flavor",
    description:
      "At our healthy restaurant, we believe that eating well should never mean compromising on flavor. That's why we've curated a menu that celebrates the best of nutritious ingredients without compromising on taste or satisfaction.",
  },
  {
    image: "food-3",
    title: "Skill and Expertise",
    description:
      "Experience the joy of guilt-free dining as our culinary experts skillfully prepare each dish with a focus on balance and nutrition. We prioritize using locally sourced, organic ingredients whenever possible, ensuring that every bite is a celebration of freshness and quality.",
  },
  {
    image: "food-2",
    title: "Food for All",
    description:
      "Whether you're a health-conscious individual, a fitness enthusiast, or simply someone who appreciates delicious food that supports your well-being, our healthy restaurant is the perfect destination. Enjoy a meal that not only satisfies your taste buds but also nourishes your body, leaving you energized and revitalized.",
  },
];
