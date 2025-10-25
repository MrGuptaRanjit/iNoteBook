import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    // const s1 = {
    //     "name": "Ranjit",
    //     "class": "CS"
    // }
    
    // const [state , setState]=useState(s1);
    // const update = ()=>{
    //     setTimeout(() => {
    //         setState({
    //     "name": "Amit",
    //     "class": "CS 1"
    // })
    //     }, 1000);
    // }

    const notesInitial = [
  {
    "_id": "68f20b4b36ee2f73929d4198",
    "user": "68f209fb36ee2f73929d4194",
    "title": "Maths",
    "description": "Maths is very interesting",
    "tag": "personal",
    "date": "2025-10-17T09:24:27.871Z",
    "__v": 0
  },
  {
    "_id": "68f20bf536ee2f73929d419b",
    "user": "68f209fb36ee2f73929d4194",
    "title": "Science",
    "description": "Science is very interesting",
    "tag": "General",
    "date": "2025-10-17T09:27:17.180Z",
    "__v": 0
  }
]

const [notes,setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;