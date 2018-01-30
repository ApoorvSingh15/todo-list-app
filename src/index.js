import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

ReactDOM.render(
    <div>
        <h1 style={{textAlign : 'center' , textDecoration : 'underline' , color : 'green'}}> TODO List </h1>
        <TodoList />
    </div>,
    document.getElementById('root')  
);