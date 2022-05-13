// displays tasks 
import React from "react";

function Overview(props) {
    const {tasks} = props;

    return (
        <ul className="flex flex-col justify-center">
            {tasks.map(function(task) {
                return <li key={task.id} className="flex gap-2"><input type="checkbox" name="" id=""/>{task.number}. {task.text}</li>
                // return <li key={task.id} className="flex gap-2"><input type="checkbox" checked={task.done} name="" id="" onClick={() => {}}/>{task.number}. {task.text}</li>
            })}
        </ul>
    );
};

export default Overview