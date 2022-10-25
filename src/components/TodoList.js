import React from 'react';

import Todo from './Todo';

const TodoList = ({ list, setList, filteredTodos }) => {
    console.log(list)
    return (
        <div>
            <ul className='tasks-list'>
                {filteredTodos.map((task) => {
                    return <Todo 
                        text={task.text}
                        task={task}
                        key={task.id}
                        setList={setList}
                    />
                })}
            </ul>
        </div>
    )
}

export default TodoList;