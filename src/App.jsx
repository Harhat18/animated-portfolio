import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Parrallax from "../components/parrallax/Parrallax";

import "./app.scss";

const App = () => {
  return (
    <div>
      <section id="Anasayfa">
        <Navbar />
        <Hero />
      </section>
      <section id="Servisler">
        <Parrallax type="services" />
      </section>
      <section>Services</section>
      <section id="Portfolyo">
        <Parrallax type="portfolio" />
      </section>
      <section>Portflio1</section>
      <section>Portflio2</section>
      <section>Portflio3</section>
      <section id="İletişim">Portflio4</section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
