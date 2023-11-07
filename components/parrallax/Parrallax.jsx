import "./parallax.scss";
const Parrallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #538383, #2f4f4f)"
            : "linear-gradient(180deg, #538383, #305050)",
      }}
    >
      <h1>{type === "services" ? "Neler Yaptım" : "Neler Yapacağım"}</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="starts"></div>
    </div>
  );
};

export default Parrallax;
