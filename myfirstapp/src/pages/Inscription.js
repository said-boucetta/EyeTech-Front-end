import React, {useState} from "react";
import "./Inscription.css";
import phLogin from "../pages/loginimg.png"

const Inscription = () => {

  const [fliping, setFliping] = useState(false);


  return (
    <div className="container5">
    <div className="phLogin">
      <img className="logimg" src={phLogin}/>
    </div>
    <div className="card5">
      <div className={`inner-box ${fliping ? "" : "visible"}`} id="card">
        <div className="card-front">
          <h2>Connexion</h2>
          <form>
            <input
              type="email"
              className="input-box"
              placeholder="E-mail"
              required
            />
            <input
              type="password"
              className="input-box"
              placeholder="Mot de passe"
              required
            />
            <button type="submit" className="submit-btn">
              Valider
            </button>
            <input type="checkbox" /> <span>Remember me</span>
          </form>
          <button
            type="button"
            className="btn"
            onClick={(e) => {
              e.stopPropagation();
              setFliping(!fliping);
            }}
          >
            Je m'inscris
          </button>
          <a href="">Mot de passe oublié!</a>
        </div>

        <div className="card-back">
          <h2>Inscription</h2>
          <form>
            <input
              type="text"
              className="input-box"
              placeholder="Nom et Prénom"
              required
            />
            <input
              type="email"
              className="input-box"
              placeholder="E-mail"
              required
            />
            <input
              type="password"
              className="input-box"
              placeholder="Mot de passe"
              required
            />
            <button type="submit" className="submit-btn">
              Valider
            </button>
            <input type="checkbox" /> <span>Remember me</span>
          </form>
          <button
            type="button"
            className="btn"
            onClick={(e) => {
              e.stopPropagation();
              setFliping(!fliping);
            }}
          >
            J'ai déja un compte
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Inscription;
