
import React from 'react';

const TodoAppListItem = ({content, id, completed, toggleTodo, deleteTodo}) => {
    return (
        <div 
        >
        <p
        onClick={() => toggleTodo(id)}
        style ={{textDecoration: 
                completed ? 
                "line-through" : 
                "initial"}}
        > {content} 
        
        </p>
        <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    );
}

export default TodoAppListItem;
