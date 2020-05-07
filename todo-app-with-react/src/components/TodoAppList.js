import React from 'react';
import TodoAppListItem from "./TodoAppListItem"; 

const TodoAppList = (props) => {
    return (
        <div>

        {
            props.todos.map(todo => {
                return <TodoAppListItem 
                key={todo.id} 
                {...todo} 
                toggleTodo={props.toggleTodo} 
                deleteTodo={props.deleteTodo}/>
            })
        }
            
        </div>
    );
}

export default TodoAppList;

