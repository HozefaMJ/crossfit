import React, { Component } from "react";
import Navbar from "./common/navbar";

import "../styles/gallery.css";

import one from "../img/Gallery/1.jpg";
import two from "../img/Gallery/2.jpg";
//import three from "../img/Gallery/3.jpg";
import four from "../img/Gallery/4.jpg";
import five from "../img/Gallery/5.jpg";
import six from "../img/Gallery/6.jpg";
import seven from "../img/Gallery/7.jpg";
import eight from "../img/Gallery/8.jpg";
import nine from "../img/Gallery/9.jpg";
import ten from "../img/Gallery/10.jpg";
import eleven from "../img/Gallery/11.jpg";
import twelve from "../img/Gallery/12.jpg";
import thirteen from "../img/Gallery/13.jpg";
import fourthteen from "../img/Gallery/14.jpg";
import fifthteen from "../img/Gallery/15.jpg";
import sixthteen from "../img/Gallery/16.jpg";

//import expand from "../img/Gallery/expand.png";

class Gallery extends Component {
  state = {};
  render() {
    return (
      <div className="gallery">
        <Navbar />
        <div className="image-gallery">
          <img src={one} className="img-1" alt="" />
          <img src={two} className="img-2" alt="" />
          {/*<img src={three} className="img-3" />*/}
          <img src={four} className="img-4" alt="" />
          <img src={five} className="img-5" alt="" />
          <img src={six} className="img-6" alt="" />
          <img src={eight} className="img-8" alt="" />
          <img src={seven} className="img-7" alt="" />
          <img src={nine} className="img-9" alt="" />
          <img src={ten} className="img-10" alt="" />
          <img src={eleven} className="img-11" alt="" />
          <img src={twelve} className="img-12" alt="" />
          <img src={thirteen} className="img-13" alt="" />
          <img src={fourthteen} className="img-14" alt="" />
          <img src={fifthteen} className="img-15" alt="" />
          <img src={sixthteen} className="img-16" alt="" />
        </div>
      </div>
    );
  }
}

export default Gallery;
