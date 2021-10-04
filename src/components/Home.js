import React from "react";
import "./css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          alt="Home"
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="988296321"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="988296322"
            title="Kenwood KMX750RD/ KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater,Dough Hook and Whisk, 5 ltr Glass Bowl 1000W (Red)"
            image="https://m.media-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
            price={239.0}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="988296323"
            title="New Apple Watch SE (GPS, 40mm) - Space Grey Aluminium Case with Black Sport Band"
            image="https://m.media-amazon.com/images/I/71bUKrOPzYL._SL1500_.jpg"
            price={199.99}
            rating={5}
          />
          <Product
            id="988296324"
            title="Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
            image="https://m.media-amazon.com/images/I/61b4qFTXRML._AC_SL1000_.jpg"
            price={98.99}
            rating={4}
          />
          <Product
            id="988296325"
            title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (3rd Generation)"
            image="https://m.media-amazon.com/images/I/81Y5WuARqpS._SL1500_.jpg"
            price={299.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="988296326"
            title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Dual WQHD 5120 x 1440, 120Hz, HDMI, Displayport, USB"
            image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"
            price={499.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
