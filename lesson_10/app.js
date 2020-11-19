
// komponent funkcyjny, bestanowy

const Header = () => {
  return (
    <div>
      <h1>Komponent funkcyjny i klasowy - lekcja 10</h1>
    </div>
  );
};

// komonent klasowy stanowy
const Title = () => {
  return(
    <div>
      <h1>jestem title i koniec</h1>
    </div>
  )
}


class Blog extends React.Component {
  state = {
    text: "-to jest state-",
  };
 
  render() {
    return (
      
      <section>
        
        <h2>Artykul komponent klasowy {this.state.text}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nemo
          omnis pariatur natus repudiandae perferendis eligendi excepturi quo
          accusantium, nostrum a nobis voluptate officiis fugiat! Ipsum quaerat
          veniam blanditiis est!
        </p>
        <Title />
      </section>
    );
  }
}


const App = () => {
  return(
    <>
    <Header />
    <Blog />
    <Title />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
