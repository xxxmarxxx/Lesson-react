import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

const Home = () => {
  // console.log("renderuje");
  return <h1>Welcome on my page</h1>;
};
const News = () => <div><h1>Aktualnosci</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, expedita earum voluptas pariatur quidem cupiditate illum. Nam excepturi, cupiditate minima soluta praesentium eveniet, maiores velit provident, architecto ab ipsum nemo!
  Debitis corporis non molestias. Excepturi beatae molestiae iusto, aut exercitationem vel officiis quia libero dicta magni, explicabo tenetur accusantium, cupiditate sunt est! Autem, natus quod tempore libero nemo odit nulla?</p>
  </div>
const Contact = () => <div><h1>Kontakt <br/></h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, expedita earum voluptas pariatur quidem cupiditate illum. Nam excepturi, cupiditate minima soluta praesentium eveniet, maiores velit provident, architecto ab ipsum nemo! <br/><br/>
  Debitis corporis non molestias. Excepturi beatae molestiae iusto, aut exercitationem vel officiis quia libero dicta magni, explicabo tenetur accusantium, cupiditate sunt est! Autem, natus quod tempore libero nemo odit nulla?<br/><br/>
  Excepturi ducimus ex harum cupiditate pariatur. Totam commodi ut, aliquam perspiciatis eius ipsam, quod animi maxime dicta atque minima voluptatem eos, laudantium impedit consectetur tenetur iure dolorum pariatur expedita non.</p>
  </div>
const ErrorPage = () => <h1>Strona nie istnieje</h1>;

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h3 className="lesson">
              Lesson 102/105 Project SPA z menu i adresami URL- strona 404 i
              Switch
            </h3>
            <nav>
              <ul>
                {/* <li><a href="/">Start</a></li>
          <li><a href="/news">Aktualnosci</a></li>
          <li><a href="/contact">Kontakt</a></li> */}
                <li>
                  <NavLink to="/" exact activeClassName="home_selected">
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" activeClassName="news_selected">
                    Aktualnosci
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    activeClassName="contact_selected"
                    activeStyle={{
                      backgroundColor: "#0e4054",
                      letterSpacing: "4px",
                    }}
                  >
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/news" component={News} />
              <Route path="/contact" component={Contact} />
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
