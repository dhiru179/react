import './App.css';
import Header from './component/Header';
import {Todos} from "./component/Todos";
import TodosItem from "./component/TodosItem"
import React,{useState} from 'react';

function App() {

 const onDelete = (todo)=>{
    console.log("i am delete",todo);

setTodos(todos.filter((e)=>{
  return e!==todo;
  // return console.log(e,todos)
}))
 }
  const [todos,setTodos] = useState([
    {
      sno:1,
      title:"market",
      desc:"go to market"
    },
    {
      sno:2,
      title:"school",
      desc:"go to school"
    },
    {
      sno:3,
      title:"hell",
      desc:"go to hell"
    }
  ])
  return (
    <>
    {/* {console.log()} */}
  <Header title="header" search={false} />
  <Todos task={todos} onDelete={onDelete} />
  {/* <TodosItem/> */}
  </>
  );
}

export default App;
