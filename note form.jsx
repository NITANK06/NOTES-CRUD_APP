import { useState, useEffect } from "react";

function NoteForm({ addNote, updateNote, editingNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Title and Content cannot be empty!");
      return;
    }

    if (editingNote) {
      updateNote({ ...editingNote, title, content });
    } else {
      addNote({ title, content });
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}

export default NoteForm;
