function NoteItem({ note, deleteNote, setEditingNote }) {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="actions">
        <button onClick={() => setEditingNote(note)}>Edit</button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </div>
  );
}

export default NoteItem;
