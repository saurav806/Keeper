import React, { useState } from "react";


function CreateNote (props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        
        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form className="createNote">
                <input 
                    type="text"  
                    name="title"
                    value={note.title} 
                    onChange={handleChange} 
                    placeholder="Title"
                />
                <textarea 
                    type="text" 
                    name="content" 
                    value={note.content}  
                    onChange={handleChange}
                    rows={3}
                    placeholder="Take a note..." 
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
};

export default CreateNote;