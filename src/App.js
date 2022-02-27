import { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import SearchBar from './components/SearchBar';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 'xJdzTpY9UKYbRhO00qN-P',
      text: 'This is my first note',
      date: '05/05/2021',
    },
    {
      id: 'uvv7ISkM-C7VH-Og082eg',
      text: 'This is my second note',
      date: '15/07/2021',
    },
  ]);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addNote = (text) => {
    const createdAt = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: createdAt.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className='app'>
      <Header />
      <SearchBar value={value} handleChange={handleChange} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(value.toLowerCase())
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
