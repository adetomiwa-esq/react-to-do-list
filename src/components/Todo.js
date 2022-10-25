import React from 'react';

export default function Todo({ text, task, setList }){

    function deleteHandler(){
        setList(prevValue => prevValue.filter((todo) => todo.id !== task.id))
    }

    function completeHandler(){
        setList(prevValue => prevValue.map((todo) => {
            if(task.id === todo.id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        }))
    }

    return (
       <div className='task-body'>
            <li className={`task-to-do ${task.completed ? 'line-throught' : ''}`}>
                {text}
            </li>
            <div className='check' onClick={completeHandler}>
                <i className='fas fa-check'></i>
            </div>
            <div className='trash' onClick={deleteHandler}>
                <i className='fas fa-trash'></i>
            </div>
       </div>
    )
}