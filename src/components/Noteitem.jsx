import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
          <div id="icon" className="mx-3">
            <FontAwesomeIcon icon={faTrash} /> 
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
          </div>
          <p className="card-text">{note.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
