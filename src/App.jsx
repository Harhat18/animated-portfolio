import Navbar from "../components/navbar/Navbar";
import Test from "../components/navbar/Test";
import "./app.scss";

const App = () => {
  return (
    <div>
      <section id="Anasayfa">
        <Navbar />
      </section>
      <section id="Servisler">Parallax</section>
      <section>Services</section>
      <section id="Portfolyo">Parallax</section>
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
