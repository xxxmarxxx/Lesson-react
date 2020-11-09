class App extends React.Component {
  state = {
    active: true,
  };

  handleClick = () => {
    this.setState((state) => ({
      active: !state.active,
    }));
  };

  render() {
    return (
      <div>
        <SwitchButton active={this.state.active} click={this.handleClick} />
        {this.state.active && <Clock />}
      </div>
    );
  }
}

const SwitchButton = (props) => (
  <button onClick={props.click}>{props.active ? "Wylacz" : "Wlacz"}</button>
);

class Clock extends React.Component {
  // interval = "";

  state = {
    time: this.getTime(),
  };

  // const getSeconds = getSeconds=()=>{
  //   if(i < 10) {
  //     i = "0" + i;
  //   return i;
  // }

  getTime() {
    const currentTime = new Date();
    // console.log(currentTime);
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    };
  }

  setTime() {
    // console.log(this);
    const time = this.getTime();
    this.setState({ time });
  }
  componentDidMount() {
    console.log("zegarek wyswietlony");
    this.interval = setInterval(this.setTime.bind(this), 1000);
    // console.log(index);
  }

  componentWillUnmount() {
    console.log("zegarek usuniety");
    clearInterval(this.interval);
  }

  render() {
    // this.getTime()
    const { hours, minutes, seconds } = this.state.time;
    return (
      <>
        <h1>Lesson 65/66 Zegarek</h1>
        <div className="clock">
          {hours} : {minutes > 9 ? minutes : `0${minutes}`} : {seconds > 9 ? seconds : `0${seconds}`}
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
