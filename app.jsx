import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) setNotes(storedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note =>
      note.id === updatedNote.id ? updatedNote : note
    ));
    setEditingNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="container">
      <h1>Notes CRUD App</h1>
      <NoteForm
        addNote={addNote}
        updateNote={updateNote}
        editingNote={editingNote}
      />
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        setEditingNote={setEditingNote}
      />
    </div>
  );
}

export default App;
