import logo from './logo.svg';
import './App.css';  
import Name from './page/Name';
import { useEffect, useState } from 'react';
import List from './components/List';
import openEye from './assets/open-eye.png'
import closeEye from './assets/close-eye.png'
// jsx

function App() {
  const [open, setOpen] = useState(false)
  

  return (
    <div className='todo'>
      <div className='password'>
        <input placeholder='Password'
        type={open ? 'password': 'text'}/>
        {open ? 
        <img src={openEye} onClick={() => setOpen(!open)} alt='open'/> 
        : <img src={closeEye} onClick={() => setOpen(!open)} alt='close'/>}
      </div>

    </div>  
  );    
}

export default App;
// const [name, updateName] = useState('vijeeth') // ['vijeeth', function]
//   const [todo, setTodo] = useState(['todo1', 'todo2', 'todo3']) // ['vijeeth', function
//   const [inputValue, setInputValue] = useState('') 
  
//   const handleList = () => {
//     setTodo([...todo, inputValue])
//   }

//   const handleDelete = (index) => {
//     // console.log(index)
//     const newTodo = todo.filter((item, i) => i !== index)
//     console.log(newTodo)
//     setTodo(newTodo)
//   }
{/* {name}
      <button onClick={changeName}>Change Name</button> */}
      {/* <input placeholder='list' onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={() => handleList()}>Add Todo</button>
      <ul>
        {todo.map((item, index) => 
        <List key={index} index={index} todo={item} 
        setTodo={setTodo}
        handleDelete={handleDelete} />)}  

      </ul> */}