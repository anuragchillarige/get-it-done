// input field to take in the user's todo, add to firebase
// read todos from firebase itself to make other features easier.

// each user will have their own collection, which will have documents for each todo

import React, {useRef} from 'react';
import {db} from '../Firebase.js'
import {doc, setDoc } from 'firebase/firestore'

export default function Input() {


    const textVal = useRef(""); // used to get a reference of the input

    const addToDB = async(e)  => { 
        e.preventDefault();
        if (textVal.current.value !== "") { 
            let date = new Date();
            let docName = date.getFullYear() + " " + date.getMonth() + " " + date.getDay() + " " +  date.getTime() + 
            " " + textVal.current.value;
            console.log(docName)
            await setDoc(doc(db, "Anurag", docName), {
                todo: textVal.current.value + "",
                completed: false,
                id: docName
            });
        }
        textVal.current.value = "";
    }

    return (
        <div className="input-holder">
            <h3>Enter A Task</h3>
            <form action="" onSubmit={addToDB}>
                <input type="text" placeholder="Enter your task..." ref={textVal}/>
            </form>
        </div>
    )
}