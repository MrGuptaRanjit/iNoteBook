import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div
        className="card my-3 w-100 shadow-sm border-0"
        style={{
          borderRadius: "12px",
          maxWidth: "100%",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: "180px" }}>
          <div className="d-flex justify-content-between align-items-start">
            <h5
              className="card-title text-primary text-truncate"
              style={{ maxWidth: "75%" }}
            >
              {note.title}
            </h5>
            <div className="d-flex gap-3">
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="text-success"
                role="button"
                size="sm"
                onClick={() => updateNote(note)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="text-danger"
                role="button"
                size="sm"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Notes Deleted Successfully", "success");
                }}
              />
            </div>
          </div>

          <p
            className="card-text mt-2 text-secondary"
            style={{
              wordWrap: "break-word",
              whiteSpace: "normal",
              flexGrow: 1,
            }}
          >
            {note.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
