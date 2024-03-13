import "./styles.css";
import arrow from "../../assets/icons/arrow.png";
import car from "../../assets/images/car.png";
import Header from "../../components/header";

const Home = () => {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h2>
            ELEVE SEU <br /> NÍVEL
          </h2>
          <p>ALUGUE CARROS ELÉTRICOS E <br /> SINTA O PODER DO FUTURO</p>
        <button>
          SAIBA MAIS <img src={arrow} alt="arrow" />
        </button>
        </div>
        <div className="image-hero">
          <img src={car} alt="eletric Car" />
        </div>
      </section>

      <main>s</main>
      <section>s</section>
      <section>s</section>
      <section>s</section>
      <footer>s</footer>
    </main>
  );
};

export default Home;
