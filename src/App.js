import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './App.css';
// import data from './Utlis/Dataset'
import TodoCard from './Component/TodoCard/TodoCard';

function App() {
  const [toDos, setToDos] = useState([])// need to ste array so that push funtion can work
  const [newTitle, setNewTitle] = useState('')
  

  useEffect(()=>{
      let data = localStorage.getItem("data")
      if(data){
        setToDos(JSON.parse(data))
      }
  },[])

  //Handles the event when add btn is clicked
  const addHandler =()=>{
    let newTodo = {  //making a new todo object
      id: Math.random(),
      title: newTitle,
      isCompleted: false,
      isDeleted: false
  }

  toDos.push(newTodo) //adding new object in state
  setToDos([...toDos]) // updating state

    localStorage.setItem("data",JSON.stringify(toDos)) // Updating Local Storage with state
  }


  //Handles The Event when complete btn is clicked
  const completeHandler =(id)=>{
    // let temp = toDos
    // temp.map((e)=>{
    //   if(e.id===id){
    //     e.isCompleted= true
    //   }
    // })
    // console.log(...temp)
    // setToDos([...temp])
    
    const todo = toDos.find(e => e.id === id); // finds the element with id 
    todo.isCompleted = true // changes are made which are reflected automatically
    setToDos([...toDos]) //updating the current state
    localStorage.setItem("data",JSON.stringify(toDos)) //updating local storage with state
  }

  //Hanldes the event when clicked on delete btn
  const deleteHandler =(id)=>{
    // let temp = toDos
    // temp.map((e)=>{
    //   if(e.id===id){
    //     e.isCompleted= true
    //   }
    // })
    // console.log(...temp)
    // setToDos([...temp])
    
    const todo = toDos.find(e => e.id === id);
    todo.isDeleted = true 
    setToDos([...toDos])
    localStorage.setItem("data",JSON.stringify(toDos)) 
  }

  console.log(toDos)
  return (
    <div className='main-container'>
      <div className='input-container'>
        <Box

          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" 
            label="Enter Todo" 
            variant="outlined" 
            onChange={(data)=>setNewTitle(data.target.value)}/>
        </Box>
        <Button variant="outlined" onClick={addHandler}>Add</Button>
      </div>
      <div className='output-container'>
        <div className='card-container'>
          <h2>Add to cart</h2>
          <div className='card-list'>
            {
              toDos?.map((e) => {
                if(!e.isCompleted) { 
                  return(
                  <div>
                    {!e.isDeleted && 
                     <TodoCard key={e.id} title={e.title} id= {e.id} complete={completeHandler}  isCompleted={e.isCompleted} delete= {deleteHandler}/>}
                     </div>
                     )
                } else {
                  return <></>
                }
              })
            }
          </div>
        </div>
        <div className='card-container'>
          <h2>Completed</h2>
          <div className='card-list'>
          {
              toDos?.map((e) => {
                if(e.isCompleted) {
                   return (!e.isDeleted && <TodoCard key={e.id} id={e.id} title={e.title} isCompleted={e.isCompleted} delete={deleteHandler}/>)
                } else {
                  return <></>
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;