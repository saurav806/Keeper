import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
imp

function App() {
  return (
    <div>
      <Header />ort myNote from "./components/myNote";
      {myNote.map(note => (
        <Note 
          key = {note.id}
          title = {note.title}
          desc = {note.desc}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
