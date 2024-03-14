import "./styles.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  CardStepByStep,
  CardCharging,
  CardBigNumbers,
  CardCars,
} from "../../components/Cards/index";
import pictures from "../../assets/icons/pictures.svg";
import hour from "../../assets/icons/hour.svg";
import watch from "../../assets/icons/pocket-watch.svg";
import charging from "../../assets/images/charging.png";
import carIcon from "../../assets/icons/car.svg";
import graphic from "../../assets/icons/graphic.svg";
import bag from "../../assets/icons/bag.svg";
import bags from "../../assets/icons/bags.svg";
import mustang from "../../assets/images/mustang.png";
import arrowIcon from "../../assets/icons/arrow-white.svg";
import appStore from "../../assets/images/appstore.png";
import googlePlay from "../../assets/images/googleplay.png";
import mobile from "../../assets/images/mobile.png";
import arrow from "../../assets/icons/arrow.png";
import car from "../../assets/images/car.png";
import Menu from '../../components/menu'

const Home = () => {
  
  return (
    <main>
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>
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
        <div className="image-charging-container">
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

      <section className="big-numbers-container">
        <section className="big-numbers-content">
          <h2>GRANDES NÚMEROS</h2>
          <p>ACOMPANHE ALGUNS DOS NOSSOS BIG NUMBERS</p>
        </section>
        <div className="big-numbers-card">
          <CardBigNumbers image={bags} title="25k" text="Clientes contentes" />
          <CardBigNumbers
            image={graphic}
            title="85k"
            text="menos de emissão de carbono(kg)"
          />
          <CardBigNumbers
            image={carIcon}
            title="80+"
            text="Opções de veículos"
          />
        </div>
      </section>

      <section className="card-cars-section">
        <div>
          <h2 className="location">LOCAÇÕES MAIS POPULARES</h2>
        </div>
        <section className="card-cars-container">
          <CardCars
            image={mustang}
            title="FORD MUSTANG MACH-E"
            text="The Mach-E is so stylish you´ll
turn heads everywhere you go"
          />
          <CardCars
            image={mustang}
            title="FORD MUSTANG MACH-E"
            text="The Mach-E is so stylish you´ll
turn heads everywhere you go"
          />
          <CardCars
            image={mustang}
            title="FORD MUSTANG MACH-E"
            text="The Mach-E is so stylish you´ll
turn heads everywhere you go"
          />
        </section>
        <div className="button-cars-container">
          <button>
            ALUGAR <img src={arrowIcon} alt="" />
          </button>
        </div>
      </section>

      <section className="app-container">
        <div className="mobile-container">
          <img className="image-mobile" src={mobile} alt="" />
        </div>
        <div>
          <h2>BAIXE NOSSO APLICATIVO</h2>
          <p>
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s
          </p>
          <div className="app-images">
            <img src={appStore} alt="" />
            <img src={googlePlay} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
