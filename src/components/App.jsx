import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Post from "./Post";

function App() {
  const [notes, setNote] = useState([]);

  function addNote(newNote) {
    setNote((preNotes) => {
      return [...preNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      <div  className="flexPost">
        {notes.map((note) => (
          <div className="showPost">
            <Post title={note.title} content={note.content} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
