import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
   
    const notesInitial = [
  {
    "_id": "68f20b4b236ee2f73929d4198",
    "user": "68f209fb36ee2f73929d4194",
    "title": "Maths",
    "description": "Maths is very interesting",
    "tag": "personal",
    "date": "2025-10-17T09:24:27.871Z",
    "__v": 0
  },
  {
    "_id": "68f202bf536ee2f73929d419b",
    "user": "68f209fb36ee2f73929d4194",
    "title": "Science",
    "description": "Science is very interesting",
    "tag": "General",
    "date": "2025-10-17T09:27:17.180Z",
    "__v": 0
  },
   {
    "_id": "68f202b4b36ee2f73929d4198",
    "user": "68f209fb36ee2f73929d4194",
    "title": "Maths",
    "description": "Maths is very interesting",
    "tag": "personal",
    "date": "2025-10-17T09:24:27.871Z",
    "__v": 0
  },
  {
    "_id": "68f20b2f536ee2f73929d419b",
    "user": "68f209fb36ee2f73929d4194",
    "title": "Science",
    "description": "Science is very interesting",
    "tag": "General",
    "date": "2025-10-17T09:27:17.180Z",
    "__v": 0
  },
   {
    "_id": "68f20b4b236ee2f73929d4198",
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

// Add a Note
const addNote = (title,description,tag)=>{
  // TODO: API Call
  console.log("Adding Note")
  const note = {
    "_id": "68f20bf536ee62f73929d419b",
    "user": "68f209fb36ee2f73929d4194",
    "title":title ,
    "description":description ,
    "tag": tag,
    "date": "2025-10-17T09:27:17.180Z",
    "__v": 0
  };
setNotes(notes.concat(note))
}

// Delete a Note
const deleteNote = ()=>{
  
}

// Edit a Note
const editNote = ()=>{
  
}

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;