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

  function deleteNote(id) {
    setNote((preNotes) => {
      return preNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateNote onAdd={addNote} />
      <div className="posts">
        {notes.map((note, index) => (
          <Post
            title={note.title}
            key={index}
            id={index}
            content={note.content}
            onCheck={deleteNote}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
