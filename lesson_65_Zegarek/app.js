class Clock extends React.Component {
  state = {
      time: {
        hours: 12,
        minutes: 34,
        seconds: 15,
      }
  };

  getTime(){
    const currentTime = new Date();
    console.log(currentTime);
  }

  render() {
    this.getTime()
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
