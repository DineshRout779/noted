import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date }) => {
  return (
    <div className='note' id={id.toString()}>
      <p>{text}</p>
      <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever className='delete-icon' size='1.5em' />
      </div>
    </div>
  );
};

export default Note;
