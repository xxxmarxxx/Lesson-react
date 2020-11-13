import React, { Component } from 'react';

class AddTask extends Component {
    state = { 
        text: '',
        checked: false,
        date: "2020-11-13",
     }
    render() { 
        return ( 
            <div className="form">
            <input type="text" placeholder="dodaj zadanie" value={this.state.text} />
            <input style={{marginLeft: 10}} type="checkbox" checked={this.state.checked} id="important"/> 
            <label style={{margin: 10}} htmlFor="important">Priorytet</label><br/><br/>
            <label style={{margin: 10}} htmlFor="date">Do kiedy zrobic</label>
            <input type="date" value={this.state.date} min="2020-11-01" max="2021-02-31"/><br/>
            <button>Dodaj</button>
            </div>
         );
    }
}
 
export default AddTask;