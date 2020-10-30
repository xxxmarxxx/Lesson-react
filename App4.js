class Counter extends React.Component {
render(){
    return (
        <>
        <button></button>
        <button></button>
        <button>reset wyniku</button>
        <h1>Liczba klickniec:</h1>
        <h1>Wynik:</h1>
        </>
    )
}
}

ReactDOM.render(<Counter />, document.getElementById('root'))