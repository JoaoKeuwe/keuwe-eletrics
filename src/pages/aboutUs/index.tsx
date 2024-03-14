import Header from "../../components/header";
import Footer from "../../components/footer";
import { CardAssessment } from "../../components/Cards";
import image from "../../assets/images/Design sem nome (4) 1.png";
import charging from "../../assets/images/charginCar.png";
import batery from "../../assets/icons/batery.svg";
import wifi from "../../assets/icons/wifi.svg";
import money from "../../assets/icons/money.svg";
import fuel from "../../assets/icons/fuel.svg";
import coffee from "../../assets/icons/coffee.svg";
import location from "../../assets/icons/location.svg";
import chargingCar from "../../assets/images/chargingCar2.png";
import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";
import person3 from "../../assets/images/person3.png";

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

      <main className="benefics-section">
        <h2 className="title-benefics">O que nós oferecemos</h2>
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
      <section className="assessment-container">
        <h2 className="assessment-title">AVALIAÇÕES DE NOSSOS CLIENTES</h2>
        <div className="assessments-content">
          <CardAssessment
            image={person1}
            name="Giovanna Lopes "
            title="Experiência Fantástica"
            assessment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industri. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industri."
          />
          <CardAssessment
            image={person2}
            name="Lucas Lima "
            title="Melhor custo benefício"
            assessment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t he industri. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industri."
          />
          <CardAssessment
            image={person3}
            name="Bianca Alves "
            title="Adorei!!"
            assessment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industri. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industri."
          />
        </div>
      </section>
      <section className="contact-us-container">
        <div className="contact-content">
          <h3>
            QUER FAZER PARTE DESSAS <br />{" "}
            <span className="span-contact">EXPERIÊNCIAS</span> TAMBÉM?
            <br />
            <br />
            ENTRE EM CONTATO COM A GENTE!
          </h3>
          <button>Alugar</button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutUs;
