class ListItems extends React.Component {
   state={
       items:["jablko", "sliwki", "gruszka"]
   }
    render() { 
        return ( 
            <h1>hallo world</h1>

         );
    }
}
 
ReactDOM.render(<ListItems />, document.getElementById('root'))