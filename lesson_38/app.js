const date = {
  user: [
    {
      id: 1,
      age: 29,
      name: "Arek",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
    },
  ],
};
const Item = (props) => <li>{`owoc ${props.content}`}</li>;

class ListItems extends React.Component {
  //    state={
  //        items:["jablko", "sliwki", "gruszka",'orange']
  //    }
  render() {
    const Items = this.state.items.map((item) => (
      <Item key={item} content={item} />
    ));
    return (
      <>
        <h1>Lesson 38/39/40 - praca z tablicami</h1>
        <ul>{Items}</ul>
      </>
    );
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
