import React, { useState } from "react";
import ToDoItems from "./ToDoItem";
import Input from "./Input";

function App(){

    
    const [items, setItem] = useState([]);

    
    function addItem(inputText){
        setItem((prevValue) => {
            return [...prevValue, inputText]
        });
    }
    
    function deleteItem(id){
        setItem((prevValue) => {
            return prevValue.filter((item, index) => {
                return index !== id;
            });
        });

    }

    return (

        <div className="maindiv">
            <div className="header">
            <h1>To do List</h1>
            </div>
            <Input onAdd={addItem} />
            <div>
            <ul>
                {items.map((toDoItem,index) => { 
                return <ToDoItems key={index} id={index} text = {toDoItem} isChecked={deleteItem} /> ;
                })} 
            </ul>
            </div>
        </div>
    );

}

export default App;