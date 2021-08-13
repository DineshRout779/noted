import AddNote from './AddNote';
import Note from './Note';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className='notes-list container'>
      {notes.length > 0 ? (
        notes.map((note, i) => (
          <Note
            id={note.id}
            key={i}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))
      ) : (
        <p>No notes found!</p>
      )}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
