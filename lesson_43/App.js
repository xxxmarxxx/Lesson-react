// Symulacja modulow - kazdy komponent w innym module
// index.js - dp renderowania
// App.js - gowny komponent, obsluguje stan
// Header.js naglowek
// ListItems - Komponent bedacy kontenerem na liste potraw
// Itmes.js - Komponent na jedna potrawe


class App extends React.Component {
  state = {
    items: [
    { id: 1, name: "herbata", active: false},
    { id: 2, name: "ziemniaki", active: false},
    { id: 3, name: "kasza", active: false},
    { id: 4, name: "zupa wodna", active: false},
    { id: 5, name: "wrzatek", active: false},
    { id: 5, name: "chleb", active: false},
  ],

  }
  render() { 
    return ( 
      <React.Fragment>
      <h1>Lession 43/44/45 interaktywne menu dla restauracji cz.1</h1>
      <Header items={this.state.items} />
      <ListItems />
      </React.Fragment>
     );
  }
}