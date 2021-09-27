import React from "react";
import { useState } from "react";

function ToDoItems(props){

    // const [isClicked, setClick] = useState(false);

    // function handleClick(){
    //    setClick(!isClicked);
    // }


    return (
        <li 
        onClick={() => {
            props.isChecked(props.id);
        }} 
        
        >
        {props.text}
        </li>
        );
}

export default ToDoItems;