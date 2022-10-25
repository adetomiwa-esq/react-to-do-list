import React from 'react'

const FormInput = ({ input, setInput, list, setList, setStatus }) => {

    function updateInput(e){
        setInput(e.target.value)
    }

    function addToList() {
        setList((allItems) => {
            return[...allItems, {text: input, completed: false, id: Math.random() * 1000}]
        })
        setInput("")
    }

    const changeStatus = (e) => {
        setStatus(e.target.value)
    }

    return(
        <div className='form-input'>
            <input
                className='input'
                type='text'
                onChange={updateInput}
                value={input}
            />
            <div className='add-to-list' onClick={addToList}>
                <i className='fas fa-plus'></i>
            </div>
            
            <div className='select'>
                <select onChange={changeStatus}>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </div>
    )
};

export default FormInput;