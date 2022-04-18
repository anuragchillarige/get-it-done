import React, {useState} from 'react';
import {collection, query, onSnapshot, updateDoc, doc} from "firebase/firestore"
import {db} from "../Firebase.js"
import Todo from './Todo';

export default function TodoReader() {

    const handleComplete = async(id, complete) => {
        console.log("IN THIE FUN CTION")
        await updateDoc(doc(db, "Anurag", id), {completed: !complete})
    }

    const [todos, setTodos] = useState([])
    React.useEffect(() => {
        const q = query(collection(db, "Anurag"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                todosArray.push({text: data.todo, completed: data.completed, id: data.id});
            });
            setTodos(todosArray);
        });
        return () => unsub();
    }, []);


    return (
        <div className="todo-container">
            <h3>Your Tasks:</h3>
            {todos.map( (todo) => (<Todo text={todo.text} complete={todo.completed} id={todo.id} completeFunc={handleComplete}/> ) )}
            {/* <Todo text="Do the dishes" /> */}
        </div>
    )
}