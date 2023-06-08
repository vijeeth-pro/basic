import React, { useState } from 'react'

function List({todo, handleDelete, index, setTodo}) {
    // const { todo } = props
    const [edit, setEdit] = useState(false)
    const [editText, setEditText] = useState(todo)

    const handleEdit = (index) => {

      setTodo((previous) => {
        // console.log(previous);
        const newTodo = [...previous]
        newTodo[index] = editText
        // 0 = 'new todo'
        return newTodo
      })

      setEdit(false)
    }

    if(!edit){
      return (
        <li>
            {todo}
            <button 
            onClick={() => handleDelete(index)}>
            Delete
            </button>
            <button
              onClick={() => setEdit(true)}>
              Edit
            </button>
        </li>
      )
    } else {
      return (
        <li>
            <input value={editText} onChange={(e) => setEditText(e.target.value)}/>
            <button 
              onClick={() => handleEdit(index)}>
              update 
            </button>
        </li>
      )
    }
  
}

export default List