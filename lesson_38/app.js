
const Item = (props) => <li>{`owoc ${props.content}`}</li>

class ListItems extends React.Component {
   state={
       items:["jablko", "sliwki", "gruszka",'orange']
       
   }
    render() { 
        const Items = this.state.items.map(item => <Item key={item} content={item} />)
        return ( 
            
            <>
            <h1>Lesson 38/39 - praca z tablicami</h1>
            <ul>
                {Items}
            </ul>
            </>
         );
    }
}
 
ReactDOM.render(<ListItems />, document.getElementById('root'))