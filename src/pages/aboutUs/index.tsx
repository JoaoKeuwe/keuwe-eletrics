import Header from "../../components/header";
import image from "../../assets/images/Design sem nome (4) 1.png";
import charging from "../../assets/images/charginCar.png";
import batery from "../../assets/icons/batery.svg";
import wifi from "../../assets/icons/wifi.svg";
import money from "../../assets/icons/money.svg";
import fuel from "../../assets/icons/fuel.svg";
import coffee from "../../assets/icons/coffee.svg";
import location from "../../assets/icons/location.svg";
import chargingCar from "../../assets/images/chargingCar2.png";

import "./style.css";

const AboutUs = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="about-section">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h2>
            SOBRE A KEUWE <br /> ELETRICS
          </h2>
        </div>
      </section>

      <main>
        <h2>O que nós oferecemos</h2>
        <div className="cards-container-charging">
          <div className="container-charging">
            <section className="list-itens">
              {/* componentizar  */}
              <div className="container-list">
                <img width="30px" src={batery} alt="" />
                <p>Carros 100% elétricos</p>
              </div>
              <div className="container-list">
                <img width="30px" src={wifi} alt="" />
                <p>100% online</p>
              </div>
              <div className="container-list">
                <img width="30px" src={money} alt="" />
                <p>
                  melhor custo beneficio do <br /> mercado
                </p>
              </div>
            </section>

            <div>
              <img className="charging" src={charging} alt="" />
            </div>
          </div>
        </div>

        <div className="cards-container-charging-2">
          <div className="container-charging-2">
            <section className="list-itens-2">
              {/* componentizar  */}
              <div className="container-list-2">
                <img width="30px" src={fuel} alt="" />
                <p>pontos de carregamento próprios </p>
              </div>
              <div className="container-list-2">
                <img width="30px" src={coffee} alt="" />
                <p>Mais praticidade</p>
              </div>
              <div className="container-list-2">
                <img width="30px" src={location} alt="" />
                <p>Ótima localizações de veiculos</p>
              </div>
            </section>

            <div>
              <img className="charging" src={chargingCar} alt="" />
            </div>
          </div>
        </div>
      </main>
      <section></section>
      <section></section>
      <footer> </footer>
    </main>
  );
};

export default AboutUs;
