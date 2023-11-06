import Navbar from "../components/navbar/Navbar";
import Test from "../components/navbar/Test";
import "./app.scss";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portflio1</section>
      <section>Portflio2</section>
      <section>Portflio3</section>
      <section>Portflio4</section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
