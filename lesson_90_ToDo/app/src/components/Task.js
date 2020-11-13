import React from 'react';

const Task = (props) => {

    const { text, date } = props.task;
    return ( 
        <div className="task">
            <p>
    <strong>{text}</strong> - do <span>{date}</span>
            <button>Zostalo zrobione</button>
            <button>X</button>
            </p>
        </div>
     );
}
 
export default Task;