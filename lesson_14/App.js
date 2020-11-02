
// przycisk -po klicnieciu dodana jest litera do tekstu

class App extends React.Component {
    state = { 
        text: "",
        btn: "uruchom"
     }

handleClick(){
    // this.state.text += "a";
    // console.log(this.state.text);
    // const letter = " mariusz "
    const number = Math.floor(Math.random() *49)
    this.setState({
        text: this.state.text + " " + number
    })
}

    render() { 
        const btnName = "stworz liczbe"
        return ( 
            <>
            <h2>Liczba Losowa i jej wyswietlenie</h2>
            <button className="bb" onClick={this.handleClick.bind(this)}>{this.state.btn}</button>
            <PanelResult text={this.state.text}/>
            {/* <PanelResult text={this.state.text}>fajnie</PanelResult> */}
            {/* <h1>{this.state.text}</h1> */}
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

 
ReactDOM.render(<App btnTitle="dodaj cyfre"/>, document.getElementById("root"))
