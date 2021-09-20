import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="Vedaka Popular Whole Cashews, 200g"
          price={174.99}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/91mot384SGL._AC_UL160_SR160,160_.jpg"
        />

        <Product
          id="12321342"
          title="MI Cordless Beard Trimmer 1C, with 20 length settings, 60 MInutes of usage, & USB Fast charging, black
          MI Cordless Beard Trimmer 1C, with 20 length settings, 60 MInutes of usage, & USB Fast charging, black"
          price={999.00}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/61TmtuN7yAL._AC_UL160_SR160,160_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321343"
          title="LIAN LI ST120 RGB - White | 120mm PWM ARGB Case Fan with ARGB Controller (Triple Pack) - G99.12ST3W.in"
          price={3127.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/51WWkJ6f6SS._SL1000_.jpg"
        />

        <Product
          id="12321344"
          title="AUGEN Super Hero Harry-Potter Action Figure Limited Edition Bobblehead with (Pack of 1)"
          price={499.00}
          rating={4}
          image="https://m.media-amazon.com/images/I/51F94SEWKbS._SL1500_.jpg"
        />

        <Product
          id="12321345"
          title="boAt Airdopes 311v2 Bluetooth Truly Wireless Earbuds with Mic(Active Black)"
          price={2499.00}
          rating={4}
          image="https://m.media-amazon.com/images/I/61kctodzcCL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321346"
          title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
          price={160000.00}
          rating={4}
          image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
