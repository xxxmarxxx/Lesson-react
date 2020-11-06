const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Usun</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "Jan K." },
      { id: 2, name: "Piotr T." },
      { id: 3, name: "Mariusz O." },
      { id: 4, name: "Pawel K." },
    ],
  };

//   handleDelete(id) {
//     // console.log(this, id);
//     const people = [...this.state.people];
//     const index = people.findIndex((person) => person.id === id);
//     console.log(index);
//     console.log(people);
//     people.splice(index, 1);
//     this.setState({
//       people,
//     });
//   }

  handleDelete(name){
      let people = Array.from(this.state.people)
      console.log(people);
  }

  render() {
    // const people = this.state.people.map((person) => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     delete={this.handleDelete.bind(this, person.id)}
    //   />
    // ));
    const people = this.state.people.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          delete={this.handleDelete.bind(this, person.name)}
        />
      ));

    return (
      <>
        <section>
          <h1>Zadanie - usuwanie elementu listy</h1>
          <ul>{people}</ul>
        </section>
      </>
    );
  }
}
ReactDOM.render(<List />, document.getElementById("root"));
