import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className='note add-note'>
      <textarea
        name='add-note'
        value={noteText}
        onChange={handleChange}
        id='add-note'
        placeholder='Type to add a note...'
      ></textarea>
      <div className='note-footer'>
        <small>200 Remaining</small>
        <button className='btn save' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
