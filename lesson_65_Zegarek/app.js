class Clock extends React.Component {

  interval = ""

  state = {
      time: this.getTime()

  };

  // const getSeconds = getSeconds=()=>{
  //   if(i < 10) {
  //     i = "0" + i;
  //   return i;
  // }

  getTime(){
    const currentTime = new Date();
    // console.log(currentTime);
    return({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    })
  }

  setTime(){
    // console.log(this);
    const time = this.getTime()
    this.setState({ time })
  }
  componentDidMount() {
    this.interval = setInterval(this.setTime.bind(this), 1000)
    // console.log(index);
  }

 componentWillUnmout() {
   clearInterval(this.interval)

 }

  render() {
    // this.getTime()
    const {hours,minutes,seconds} = this.state.time
    return (
      <>
      <h1>Lesson 65 Zegarek</h1>
      <div className="clock">
      {hours} : {minutes} : {seconds}
      </div>
      

      </>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
