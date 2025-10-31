import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {

  const context = useContext(noteContext);
  const {deleteNote} = context;

  const { note , updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
          <div id="icon" className="mx-3">
            <FontAwesomeIcon icon={faTrash} onClick={()=>{(deleteNote(note._id)); 
              props.showAlert("Notes Deleted Successfully" , "success")
            }} /> 
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{(updateNote(note))}} />
          </div>
          </div>
          <p className="card-text">{note.description}</p>         
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
