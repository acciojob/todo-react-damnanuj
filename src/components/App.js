
import React, { useState } from "react";
import './../styles/App.css';
import Input from "./Input";
import Todo from "./Todo";

const App = () => {

  const [tasks, setTasks] = useState([]);
  const[id, setId] = useState(0)

  function addTask (value){
      setId(id + 1);
      setTasks([...tasks, {id : id, todo: value}]);

  }
  function deleteTask (id) {
    const newTask = tasks.filter((item) => item.id !== id);
    setTasks(newTask)
  }




  return (
    <div className="container">
         <span>To-Do-List</span>
        <Input addTask= {addTask}/>
        <Todo tasks={tasks} deleteTask={deleteTask}/>
        
    </div>
  )
}

export default App
