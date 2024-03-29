import Header from "../../components/header";
import Footer from "../../components/footer";
import formImage from "../../assets/images/formImage.png";
import Menu from "../../components/menu";

import "./style.css";

const ContactForm = () => {
  return (
    <main>
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>

      <section className="hero-form">
        <div className="hero-content-form">
          <img className="image-form" src={formImage} alt="" />
          <h2>
            Entre em <br className="br"/> Contato <span className="span-form">Agora</span>
          </h2>
        </div>
      </section>
      <section className="forms">
        <h2>
          FALE <span className="span-form">CONOSCO</span>
        </h2>
        <div className="input-form">
          <input className="input" type="text" placeholder="Digite seu nome" />
          <input
            className="input"
            type="text"
            placeholder="Digite seu E-mail"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Escreva aqui..."
          ></textarea>
          <button>ENVIAR</button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactForm;
