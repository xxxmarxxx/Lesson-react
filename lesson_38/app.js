class ListItems extends React.Component {
   state={
       items:["jablko", "sliwki", "gruszka",'orange']
       
   }
    render() { 
        return ( 
            <>
            <h1>Lesson 38/39 - praca z tablicami</h1>
            <ul>
                {this.state.items.map((item) => <li key={item}> {`owoc ${item}`} </li>)}
            </ul>
            </>
         );
    }
}
 
ReactDOM.render(<ListItems />, document.getElementById('root'))