import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} description={todo.description} name={todo.responsible.name} email={todo.responsible.email} status={todo.status} dueDate={todo.dueDate} fileUrl={todo.fileUrl}/>
            );
        });

        return (
            todoList
        );


    }

}