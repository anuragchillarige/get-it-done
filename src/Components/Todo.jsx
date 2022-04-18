import { deleteDoc, doc} from 'firebase/firestore';
import React from 'react';
import { db } from '../Firebase.js'
import {FcCheckmark, FcEmptyTrash} from "react-icons/fc";


export default function Todo(props) {

    const handleDelete = async(id) => {
       await deleteDoc(doc(db, "Anurag", id));
    }

    return (
    <div className="todo">
            <p style={{ textDecoration: props.complete && "line-through"}}>{props.text}</p>
        <div className="options-holder">
                <button className="completed" onClick={() => (props.completeFunc(props.id, props.complete))} > <FcCheckmark /> </button>

            <button className="delete" onClick={() => (handleDelete(props.id))}><FcEmptyTrash /></button>
        </div>
        </div>
    )
}
