

import React, { useState } from "react";

const Input = ({addTask}) =>{
    const [value, setValue] = useState ("");

    const handleTask =(e) =>{
        e.preventDefault();
        addTask(value.trim());
        setValue("")
    }

    return (
        <form onSubmit={handleTask}>
            <input value={value} onChange={(e)=> setValue(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default Input;