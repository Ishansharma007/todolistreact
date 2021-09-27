import React, { useState } from "react";

function Input(props){

    const [inputText, setInputText] = useState("");

    function handleChange(event){
        const newValue = event.target.value ;
        setInputText(newValue);
    }

    return(
        <div className="form">
        <input onChange={handleChange} value={inputText}></input>
        <button onClick={() => {
            props.onAdd(inputText);
            setInputText("");
        }}><span>Add item</span></button>       
        </div>
    );
}

export default Input;