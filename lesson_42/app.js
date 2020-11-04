const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 17,
      name: "Karol",
      sex: "male",
    },
  ],
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p className="infoUser">Informacje o uzytkowniku</p>
    <p>Wiek uzytkownika: <strong>{user.age}</strong></p>
    <p>Plec uzytkownika: {user.sex}</p>
    {/* <h2>Ma {user.age}</h2> */}
  </div>
);

class ListItems extends React.Component {
  //    state={
  //        items:["jablko", "sliwki", "gruszka",'orange']
  //    }
  state={

  }
  render() {
    let users = this.props.data.users;
    users = users.filter((user) => user.sex === "male");
    const Items = users.map((user) => <Item key={user.id} user={user} />);

    return (
      <>
        <h1>Lesson 42 - praca z tablicami</h1>
        <div>
          
        </div>
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
