import React from "react";
import "./App.css";
import logo from "./assets/logo_img.png";
import logo_name from "./assets/logo_name.png";
import { HouseTypesPage } from "./components/HouseTypesPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ImageSlider } from "./components/common/ImageSlider";
import { Slides } from "./const/slides";
import { FurnishingSection } from "./components/FurnishingSection";
import { FooterSection } from "./components/sections/footer/footer";

function App() {
  return (
    <>
      <div className={"backgroundContainer"}>
        <ImageSlider slides={Slides} autoPlayInterval={15} />
      </div>

      <header className="viewport-header">
        <div className="header_top">
          <img className="header__logo-image" src={logo} alt="" />
          <img className="header__logo-title" src={logo_name} alt=""></img>

          <div className="header__contacts">
            <p> * ЛЮКСОВІ ТАУНХАУСИ</p>
            <p> * УНІКАЛЬНИЙ СТИЛЬ</p>
            <p> * ТІЛЬКИ ОРЕНДА</p>
          </div>
          <div className="header_phones">
            <span data-phone-number="+380487894450">+38 (050) 302 26 19</span>
            <br></br>
            <span data-phone-number="+380487894450">+38 (050) 302 26 19</span>
            <br></br>
            <span data-phone-number="+380487894450">+38 (050) 302 26 19</span>
          </div>
          <div className="social">
            <a
              href="https://www.facebook.com/canterberyhome/"
              className="facebook"
              title="facebook"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/doma.bucha/"
              className="instagram"
              title="instagram"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="header_details">
          <div className="header_details-content">
            <h2> - Повне облаштування</h2>
            <h2> - Газове опалення</h2>
            <h2> - Безперебійник напруги</h2>
            <h2> - Виділена лінія під генератор</h2>
          </div>
        </div>
      </header>
      <HouseTypesPage
        house={{
          address: "вул. ШОТА РУСТАВЕЛІ 14",
          size: "120 m",
          floors: "3 поверхи",
          bedrooms: "2 спальні",
          bathrooms: "2 санвузли",
          yard: "1.5 сотки",
          parking: "2 паркомісця",
          kitchen: "кухня студія",
          hardware: "газовий та електрокотел",
          imgUrl: "/assets/120m.jpg",
          slideDirection: "left",
        }}
      />
      <HouseTypesPage
        house={{
          address: "вул. ШЕВЧЕНКА 41Б",
          size: "100 m",
          floors: "2 поверхи",
          bedrooms: "2 спальні",
          bathrooms: "2 санвузли",
          yard: "1 сотка",
          parking: "1 паркомісце",
          kitchen: "кухня студія",
          hardware: "газовий та електрокотел",
          imgUrl: "/assets/100m.jpg",
          slideDirection: "right",
        }}
      />

      <FurnishingSection />
      <FooterSection />
    </>
  );
}

export default App;
