import "./Home.css";

function IntroItem({ item }) {
  return (
    <div className="intro-item">
      <img
        className="round-img"
        src={`./src/assets/${item.image}.jpg`}
        alt=""
      />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default IntroItem;
