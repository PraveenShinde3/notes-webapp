import React from "react";
import Note from "../Note/Note";

import "./NoteContainer.css";

const NoteContainer = (props) => {
  const reverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const noteData = reverseArray(props.noteData);

  return (
    <div className="note-container">
      <div className="note-container-notes">
        {noteData?.length > 0 ? (
          noteData.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h1>You don't have any notes </h1>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
