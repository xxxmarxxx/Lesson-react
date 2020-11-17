import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h3>Footer</h3>
      <Route
        path="/"
        exact
        render={(props) => (
            <p>Jestes na <span>stronie glownej</span></p>
            )
        }
      />

      <Route
        path="/:page"
        exact
        render={(props) => {
          console.log(props);
          return (
            <>
          <p>Jestes na <span>{props.match.params.page}</span></p>
          <p>Jestes na <span>{props.match.url}</span></p>
          <p>Jestes na <span>{props.match.path}</span></p>
          </>
          );
        }}/>


<Route
        path="/:page/:idProduct"
        exact
        render={(props) => {
          console.log(props);
          return (
            <>
          <p>Jestes na <span>{props.match.params.idProduct}</span></p>
          <p>Jestes na <span>{props.match.url}</span></p>
          <p>Jestes na <span>{props.match.path}</span></p>
          </>
          );
        }}/>
    </div>
  );
};

export default Footer;
