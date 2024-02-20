import React from 'react'
import Todo from './Component/Todo'
import  {useState ,useEffect} from "react";




export default function App() {

const[todos,setTodos]=useState([]);


  
  const init=async()=>{
    let data=await  fetch('https://dummyjson.com/todos');
    let jsonData=await data.json();
    
 setTodos(jsonData.todos);
  }
useEffect(()=>{
  init();
},[]);


 
  return (
    <div>

{todos.map((todo)=>(
<div>
  <Todo todo={todo.todo}/>
</div>
))}


    </div>
  )
}


