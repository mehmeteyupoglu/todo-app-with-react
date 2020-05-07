import React, { Component } from 'react';
import TodoAppHeader from "./TodoAppHeader"; 
import TodoAppList from "./TodoAppList"

class TodoApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos : []
        }
    }

    addTodo = (content) => {
        const newTodo = {
            content, 
            id: Math.random(), 
            completed : false
        }

        this.setState({
            todos : [...this.state.todos, newTodo]
        })
    }

    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => {
                return todo.id !== id
            })
        })
    }
    render() {
        return (
            <div>
                <TodoAppHeader addTodo={this.addTodo}/> 
                <TodoAppList todos={this.state.todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo}/>
            </div>
        );
    }
}

export default TodoApp;
