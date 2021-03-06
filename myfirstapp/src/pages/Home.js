import React, { Component, useState } from "react";
import "./Home.css";
import VideoPlayer from "react-video-js-player";
import repair from "../pages/videoHome.mp4";
import photoDebutants from "../pages/debutants.jpg";
import photoPro from "../pages/pro.jpg";
import photoSoft from "../pages/nand.jpg";
import phLogin from "../pages/loginimg.png"

const Home = () => {
  const [show, setShow] = useState(false);
  const [fliping, setFliping] = useState(false);
  const showHandlder = () => {
    setShow(true);
  };

  const hideHandler = () => {
    setShow(false);
  };

  const flipHandlder = () => {
    setShow(true);
  };

  const turnHandler = () => {
    setShow(false);
  };
  const videoSrc = repair;

  return (
    <div className="containerHome">
      <div className="texteHome">
        <h1>Devenez un Pro technicien en réparation Smartphones</h1>
        <p>
          Vous voulez vous former à la réparation de smartphones! Vous êtes
          débutants ou réparateurs professionnels de smartphones,nous vous
          proposons une formation 100% en ligne en réparation de téléphones
          mobiles.
        </p>
      </div>

      <div onClick={showHandlder} className="videoHome">
        <i class="far fa-play-circle" />
      </div>

      {show ? (
        <div className="videoAcceuil">
          {" "}
          <VideoPlayer src={videoSrc} width="700" height="400" />
          <i
            id="exitt"
            onClick={hideHandler}
            className="quitter"
            class="fas fa-times-circle"
          />
        </div>
      ) : null}

      {/* Troisieme page////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="containerContact">
        <div className="contactHeader">
          <h1>Contactez nous</h1>
          <p>
            Vous avez des questions ? n'esitez pas a les posez, Nous vous
            répondons au prochains délais.
          </p>
        </div>

        <div className="contactBody">
          <div className="contacInfo">
            <div className="box">
              <div className="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div className="text">
                <h3>Adresse</h3>
                <p>Bd.Mahdjoub Boualem N°156-Blida</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div className="text">
                <h3>E-mail</h3>
                <p>said19022018@gmail.com</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i class="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h3>Téléphone</h3>
                <p>+213 558 320 883</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i class="fab fa-facebook"></i>
              </div>
              <div className="text">
                <h3>Facebook</h3>
                <p>EyeTech</p>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <form>
              <h2>Envoyer un message</h2>

              <div className="inputBox">
                <input
                  type="text"
                  name=""
                  required="required"
                  placeholder="Nom et Prénom"
                />
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  name=""
                  required="required"
                  placeholder="E-mail"
                />
              </div>

              <div className="inputBox">
                <textarea
                  required="required"
                  placeholder="Taper votre message..."
                />
              </div>

              <div className="inputBox">
                <input className="send" type="submit" name="" value="send" />
              </div>
            </form>
          </div>
        </div>

        {/* Deuxieme Page/////////////////////////////////////////////////////////////////////////////////////////////////////////  */}

        <div className="secondPage">
          <div className="titleSecond">
            <h1>Programme de la formation:</h1>
          </div>

          <div className="containerCard">
            <div className="card">
              <div className="img">
                <img src={photoDebutants} />{" "}
              </div>
              <div className="top-text">
                <div className="name">Niveau 1</div>
                <p>Réparation mobile pour débutants</p>
              </div>
              <div className="bottom-text">
                <div className="text">
                  Cette formation est destinée pour les gens qui ont aucune
                  connaissances dans le domaine de la réparation des
                  smartphones.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={photoPro} />
              </div>
              <div className="top-text">
                <div className="name">Niveau 2</div>
                <p>Réparation de l'Iphone et détection des pannes</p>
              </div>
              <div className="bottom-text">
                <div className="text">
                  Une formation complète dans le Hardware, spécialisé dans la
                  microsoudure et la détection des pannes d'une manière
                  scientifique des pannes complexes de l'Iphone.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={photoSoft} />
              </div>
              <div className="top-text">
                <div className="name">Software</div>
                <p>Nand programming et Icloud</p>
              </div>
              <div className="bottom-text">
                <div className="text">
                  Cette formation est pour apprendre a manipuler le matériel de
                  la programmation avec "Nand Programmin", et les techniques de
                  l'Icloud.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quatriemme Page //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="container4">
          <div className="phconnexion">
            <img className="logimg" src={phLogin}/>
          </div>
          <div className="card4">
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



        
      </div>
    </div>
  );
};

export default Home;
