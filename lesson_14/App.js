
// Nowy komponent wysfietlanie cyfr
// losowanie liczb
// Wyswietlenie nazwy przycisku z objektuprops, ze zmiennej bezposrednio lub z objektu state

class App extends React.Component {
    state = { 
        text: "",
        btn: 'urochom liczby'
        
     }

handleClick(){
    // this.state.text += "a";
    // console.log(this.state.text);
    // const letter = " mariusz "
    const number = Math.floor(Math.random() * 49)
    this.setState({
        text: this.state.text + " " + number
    })
}

    render() { 
        const btnName = "stworz liczbe"
        return ( 
            <>
            <h2>Liczba Losowa i jej wyswietlenie</h2>
            {/* <button className="bb" onClick={this.handleClick.bind(this)}>{btnName}</button> */}
            <button className="bb" onClick={this.handleClick.bind(this)}>{this.state.btn}</button>
            <PanelResult text={this.state.text}/>
            
            </>
         );
    }

}

const PanelResult = (props) => {
    return( 
    // <h1>{props.text}: {props.children}</h1> 
    <h1>{props.text}</h1> 
    )

}

 
ReactDOM.render(<App btnTitle="Dodaj liczbe"/>, document.getElementById("root"))
