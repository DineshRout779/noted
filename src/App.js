import { useState, useEffect } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    const url = './data.json';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNotes(data.notes))
      .catch((err) => console.log(err));
  };

  const addNote = (text) => {
    const createdAt = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: createdAt.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className='app'>
      <Header />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
