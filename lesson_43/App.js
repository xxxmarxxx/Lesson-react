// Symulacja modulow - kazdy komponent w innym module
// index.js - dp renderowania
// App.js - gowny komponent, obsluguje stan
// Header.js naglowek
// ListItems - Komponent bedacy kontenerem na liste potraw
// Itmes.js - Komponent na jedna potrawe


class App extends React.Component {
  
  render() { 
    return ( 
      <>
      <h1>Lession 43 interaktywne menu dla restouracji cz.1</h1>
      </>
     );
  }
}
 
  

ReactDOM.render(<App />, document.getElementById("root"));
