import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNoteContext } from '../context/NoteContext';


export default function NoteItem({note, onEditNote}) {
  const {deleteNote, editNote} = useNoteContext();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{note.tag}</Card.Subtitle>
        <Card.Text>
          {note.description}
        </Card.Text>
        <footer className="blockquote-footer">
          {new Date(note.date).toLocaleString()}
        </footer>
        <Card.Link onClick={() => deleteNote(note._id)}><i className="fa-solid fa-trash"></i></Card.Link>
        <Card.Link onClick={() => onEditNote(note._id)}><i className="fa-regular fa-pen-to-square"></i></Card.Link>
      </Card.Body>
    </Card>
  )
}
