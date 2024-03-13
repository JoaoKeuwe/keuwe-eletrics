import "./styles.css";
import arrow from "../../assets/icons/arrow.png";
import car from "../../assets/images/car.png";
import Header from "../../components/header";
import { CardStepByStep, CardCharging } from "../../components/Cards/index";
import pictures from "../../assets/icons/pictures.svg";
import hour from "../../assets/icons/hour.svg";
import watch from "../../assets/icons/pocket-watch.svg";
import charging from "../../assets/images/charging.png";
import carIcon from "../../assets/icons/car.svg";
import graphic from "../../assets/icons/graphic.svg";
import bag from "../../assets/icons/bag.svg";
import bags from "../../assets/icons/bags.svg";

const Home = () => {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h2>
            ELEVE SEU <br /> NÍVEL
          </h2>
          <p>
            ALUGUE CARROS ELÉTRICOS E <br /> SINTA O PODER DO FUTURO
          </p>
          <button>
            SAIBA MAIS <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className="image-hero">
          <img src={car} alt="eletric Car" />
        </div>
      </section>

      <main className="main-content">
        <section className="steps">
          <div>
            <h2>COMO FUNCIONA?</h2>
            <p className="subtitle">
              ALUGUE SEU PROXIMO ELÉTRICO <br /> E SIGA OS PASSOS
            </p>
          </div>
          <div className="steps-cards">
            <CardStepByStep image={pictures} title="Escolha seu elétrico" />
            <CardStepByStep image={hour} title="Escolha uma data" />
            <CardStepByStep image={watch} title="Reserve seu carro!" />
          </div>
        </section>
      </main>
      <section className="how-works">
        <div>
          <img className="image-charging" src={charging} alt="" />
        </div>
        <section className="cards-how-works">
          <CardCharging
            image={bag}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I"
          />
          <CardCharging
            image={bags}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I"
          />
          <CardCharging
            image={graphic}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I"
          />
          <CardCharging
            image={carIcon}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I"
          />
        </section>
      </section>
      <section>s</section>
      <section>s</section>
      <footer>s</footer>
    </main>
  );
};

export default Home;
