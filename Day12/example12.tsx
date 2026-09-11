import { useState } from "react";

interface Todo{
    id: number;
    text: string;
}

function TodoList(){
    const [todo, setTodo] = useState<Todo[]>([
        {id:1,text:"react"},
        {id:2,text:"typescript"},
        {id:3,text:"javascript"}
    ]);

    function AddTodo(){
        setTodo(prev => ([...prev,{id:4,text:"typescript completed."}]));
    }
    function RemoveTodo(){
        setTodo(prev => prev.filter((todo) => todo.id !== 3));
    }
    function UpdateTodo(){
        setTodo(prev => prev.map(todo => todo.id === 2 ? {...todo,text:"ReactJS"} : todo));
    }

    return(
        <div>
            {todo.map(obj => (
                <p key={obj.id}>{obj.text}</p>
            ))}
            <button onClick={AddTodo}>Add Item</button>
            <button onClick={UpdateTodo}>Update Item</button>
            <button onClick={RemoveTodo}>Delete Item</button>
        </div>
    );
}

export default TodoList;