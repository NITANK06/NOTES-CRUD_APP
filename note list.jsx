import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote, setEditingNote }) {
  if (notes.length === 0) {
    return <p>No notes available.</p>;
  }

  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          setEditingNote={setEditingNote}
        />
      ))}
    </div>
  );
}

export default NoteList;
