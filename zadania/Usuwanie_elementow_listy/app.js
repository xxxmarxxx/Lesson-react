

class List extends React.Component{
    state = {
        people:[
            { id: 1, name: "Jan K."},
            { id: 2, name: "Piotr T."},
            { id: 3, name: "Mariusz O."},
            { id: 4, name: "Pawel K."},
        ]
    }

    render(){
    
        return(
            <>
            <h1>Zadanie - usuwanie elementu listy</h1>
        <ul>{this.state.people.map(person => <li key={person.id}>{person.name}</li>)}</ul>

            </>
        )
    }

}
ReactDOM.render(<List />, document.getElementById('root'));