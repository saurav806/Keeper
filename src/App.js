import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
// import myNote from "./components/myNote";
import CreateNote from "./components/CreateNote";
 
function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes =>{
      return [...prevNotes, newNote];
    });
  }

  function deleteNote (id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote 
        onAdd= {addNote}
      />
      {notes.map((noteItem, index) => {
        return(
              <Note 
                id = {index}
                key = {index}
                title = {noteItem.title}
                content = {noteItem.content}
                onDelete = {deleteNote}
              />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;


// import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./Note";
// import CreateArea from "./CreateArea";


// import CreateArea from "./components/CreateArea";

// function App() {
//   const [notes, setNotes] = useState([]);

//   function addNote(newNote) {
//     setNotes(prevNotes => {
//       return [...prevNotes, newNote];
//     });
//   }

//   function deleteNote(id) {
//     setNotes(prevNotes => {
//       return prevNotes.filter((noteItem, index) => {
//         return index !== id;
//       });
//     });
//   }

//   return (
//     <div>
//       <Header />
//       <CreateArea onAdd={addNote} />
//       {notes.map((noteItem, index) => {
//         return (
//           <Note
//             key={index}
//             id={index}
//             title={noteItem.title}
//             content={noteItem.content}
//             onDelete={deleteNote}
//           />
//         );
//       })}
//       <Footer />
//     </div>
//   );
// }

// export default App;

