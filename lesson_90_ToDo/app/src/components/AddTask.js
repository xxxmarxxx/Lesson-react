import React, { Component } from 'react';

class AddTask extends Component {
    state = { 
        minDate: new Date().toISOString().slice(0,10),
        text: '',
        checked: false,
        date: this.minDate
     }

     handleDate = (e) => {
         this.setState({
             date: e.target.value
         })
     }

    render() { 
        // const maxDate = this.minDate.slice(0, 4) * 1 + 1;
        let maxDate = this.state.minDate.slice(0, 4) *1 +1;
        maxDate = maxDate + "-12-31";

        return ( 
            <div className="form">
            <input type="text" placeholder="dodaj zadanie" value={this.state.text} />
            <input style={{marginLeft: 10}} type="checkbox" checked={this.state.checked} id="important"/> 
            <label style={{margin: 10}} htmlFor="important">Priorytet</label><br/><br/>
            <label style={{margin: 10}} htmlFor="date">Do kiedy zrobic</label>
            <input type="date" value={this.state.date} min={this.state.minDate} max={maxDate} onChange={this.handleDate}/><br/>
            <button>Dodaj</button>
            </div>
         );
    }
}
 
export default AddTask;