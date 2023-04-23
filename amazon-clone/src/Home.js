import React from 'react'
import "./Home.css"
import Banner from "./images/Banner.jpeg";
import Book from "./images/Book.webp";
import Alexa from "./images/alexa.webp";
import Watch from "./images/watch.webp";
import Phone from "./images/phone.webp";
import Product from './Product';

import Smarttv from "./images/Smarttv.webp";



function Home() {
  return (
    <div className="home">
      <img
        className="home_image" src={Banner} alt="" />
      <div className="home_row">
        <Product
        id="23444"
        title="The Lean dckjdskjjds  Startup"
        price={11.96}
        rating={5}
        image ="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
        />

        <Product
          id="23444"
          title="TechKing Enraciner Cool Crack Design Mini Rechargeable Wireless USB Bluetooth Speaker with Mic Support for All Smartphones"
          price={2.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/417HOoTRITL._AC_UY327_FMwebp_QL65_.jpg"
        />

      </div>

      <div className="home_row">
        <Product
          id="123456"
          title="Redmi 8A Dual (Sky White, 3GB RAM, 64GB Storage) – Dual Cameras & 5,000 mAH Battery"
          price={3.96}
          rating={5}
          image = "https://m.media-amazon.com/images/I/61YSMhOd5EL._AC_UY327_FMwebp_QL65_.jpg"
        />

        <Product
          id="12378"
          title="Dlorkan® Foldable Toy Drone With 480P WiFi Camera With Remote control For Kids Quadcopter with Gesture Selfie,"
          price={11.96}
          rating={5}
          image=" https://m.media-amazon.com/images/I/618DTN-K2JL._AC_UL480_FMwebp_QL65_.jpg"
        />

<Product
          id="12391"
          title="Hero Lectro Renew 26T 7 Speed Electric Fat Bicycle 18"
          price={144.96}
          rating={3}
          image=" https://m.media-amazon.com/images/I/81zuJ43hG5L._AC_UY327_FMwebp_QL65_.jpg"
        />

      </div>

      <div className = "home_row">
      <Product
          id="12103"
          title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)"
          price={200.96}
          rating={4}
          image= "https://m.media-amazon.com/images/I/71fEd9glTIL._AC_UY327_FMwebp_QL65_.jpg "
        />
      </div>

    </div>
  )
}

export default Home
