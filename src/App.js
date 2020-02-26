import React from 'react';
import logo from './logo_m.png';
import './App.css';
import Nav from './components/Nav';
import TodoForm from './components/TodoForm';

import {todos} from './todos.json'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos
        }

        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        })

    }

    handleDelete(index) {
        if(!window.confirm('¿Desea eliminar la tarea?'))
        return;
        this.setState({
            todos: this.state.todos.filter((e, i) => {
                return i!==index;

            })
        })

    }


    render() {


        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className={'col-md-3'} key={i}>
                    <div className={'card mt-4'}>
                        <div className={'card-header'}>
                            <h3> {todo.title}</h3>
                            <span className={'badge badge-pill badge-warning ml-2'}>
                                {todo.priority}
                            </span>
                        </div>
                        <div className={'card-body'}>
                            <p> {todo.description}</p>
                            <p>
                                <mark> {todo.responsible}</mark>
                            </p>
                        </div>
                        <div className={'card-footer'}>
                            <button className={'btn btn-danger'} onClick={this.handleDelete.bind(this, i)}> Borrar
                            </button>
                        </div>

                    </div>
                </div>
            )

        });
        return (
            <div className="App">
                <Nav titulo="Tareas" cantidad={this.state.todos.length}/>
                <div className={'container'}>
                    <img src={logo} className="App-logo mt-4" alt="logo"/>
                    <div className={'row mt-4'}>
                        <div className={'col-md-3'}>
                            <TodoForm onAddTodo={this.handleAddTodo}/>
                        </div>
                        {todos}
                    </div>
                </div>


            </div>
        )
    };
}

export default App;
