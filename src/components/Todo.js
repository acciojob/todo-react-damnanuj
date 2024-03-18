import React from "react";

const Todo = ({tasks, deleteTask}) => {
  return (
    <div className="todo-container">
        <ul>
           { 
            tasks.map((task) => {
                return (
                    <div style={{display:"flex" , gap:"20px"}}>
                        <li>{task.todo}</li>
                        <button onClick={()=>deleteTask(task.id)}>Delete</button>
                    </div>
                )})
           } 
        
        </ul>

        
    </div>
  )
}

export default Todo


{/* <ul>
            <li>{task.todo}</li>
        </ul> */}