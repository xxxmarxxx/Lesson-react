import React from "react";
import { Route, Switch } from 'react-router-dom'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import '../styles/Header.css';

const Header = () => {

  // nie dziala
  // const images = [image1,image2,image3];
  // const index = Math.floor(Math.random()*3)
  // const image = images[index];

  return (
    <>
    
    <Switch>
    <Route path="/" exact render={() => (
      <img src={image3} alt="image3"/>
    )}/>
    <Route path="/products" render={() => (
      <img src={image1} alt="image1"/>
    )}/>
    <Route path="/contact" render={() => (
      <img src={image2} alt="image2"/>
    )}/>
    <Route path="/admin" render={() => (
      <img src={image3} alt="image3" />
    )}/>
    <Route render={() => (
      <img src={image1} alt="image1" />
    )}/>
    </Switch>

   {/* <img src={image} alt="header"/> */}

    </>

  );
  
}

export default Header;
