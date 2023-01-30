import "./App.css";

import NoteContainer from "./Components/NoteConatiner/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [noteData, setNoteData] = useState(
    JSON.parse(localStorage.getItem("note-data")) || []
  );

  const addNote = (color) => {
    const tempNoteData = [...noteData];
    tempNoteData.push({
      id: Date.now() + " " + Math.floor(Math.random() * 78),
      text: "New Note",
      date: Date.now(),
      color,
    });
    setNoteData(tempNoteData);
  };

  const deleteNote = (id) => {
    const tempNoteData = [...noteData];

    const index = tempNoteData.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNoteData.splice(index, 1);
    setNoteData(tempNoteData);
  };

  const updateText = (text, id) => {
    const tempNoteData = [...noteData];

    const index = tempNoteData.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNoteData[index].text = text;
    setNoteData(tempNoteData);
  };

  useEffect(() => {
    localStorage.setItem("note-data", JSON.stringify(noteData));
  }, [noteData]);

  return (
    <div className="App">
      <header className="header">Notes Web App</header>
      <div className="main">
        <Sidebar className="main-sidebar" addNote={addNote} />
        <NoteContainer
          className="main-note-container"
          noteData={noteData}
          deleteNote={deleteNote}
          updateText={updateText}
        />
      </div>
    </div>
  );
}

export default App;
