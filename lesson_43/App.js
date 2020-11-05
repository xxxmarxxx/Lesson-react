// Symulacja modulow - kazdy komponent w innym module
// index.js - dp renderowania
// App.js - gowny komponent, obsluguje stan
// Header.js naglowek
// ListItems - Komponent bedacy kontenerem na liste potraw
// Itmes.js - Komponent na jedna potrawe


class App extends React.Component {
  state = {
    items: [
    { id: 1, name: "herbata", active: true},
    { id: 2, name: "ziemniaki", active: false},
    { id: 3, name: "kasza", active: true},
    { id: 4, name: "zupa wodna", active: false},
    { id: 5, name: "wrzatek", active: false},
    { id: 6, name: "chleb", active: true},
  ],

  }

  handleChangeStatus = (id) =>{
    console.log(id);
    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active
      }
      return item
    })
    this.setState({
      items
    })

  }

  render() { 
    return ( 
      <React.Fragment>
      <h1>Lession 43/44/45/46 interaktywne menu dla restauracji cz.1</h1>
      <Header items={this.state.items} />
      <ListItems items={this.state.items} changeStatus=
      {this.handleChangeStatus} />
      </React.Fragment>
     );
  }
}