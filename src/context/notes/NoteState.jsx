import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

    // Get all Notes
  const getNotes = async () => {
    //  API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZjI5ODhlOGViYTIwN2EwMWE2Y2ZhMyIsImlhdCI6MTc2MDcyOTI1N30.OcfREYq6E6-LaPdVO41dWRwCktO4bsfAkvqnmPjyPok"
      },
    });
    const json = await response.json();
    console.log(json)
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    //  API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZjI5ODhlOGViYTIwN2EwMWE2Y2ZhMyIsImlhdCI6MTc2MDcyOTI1N30.OcfREYq6E6-LaPdVO41dWRwCktO4bsfAkvqnmPjyPok"
      },
      body: JSON.stringify({title, description, tag}),
    });
    console.log("Adding Note");
    const note = {
      _id: "68f20bf536e6e62f73929d419b",
      user: "68f209fb36ee2f73929d4194",
      title: title,
      description: description,
      tag: tag,
      date: "2025-10-17T09:27:17.180Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
    // API Call
    console.log("Deleted Note of id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZjI5ODhlOGViYTIwN2EwMWE2Y2ZhMyIsImlhdCI6MTc2MDcyOTI1N30.OcfREYq6E6-LaPdVO41dWRwCktO4bsfAkvqnmPjyPok"
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = array[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
