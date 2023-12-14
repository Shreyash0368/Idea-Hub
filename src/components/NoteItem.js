import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNoteContext } from '../NoteContext';


export default function NoteItem(props) {
  const {deleteNote, editNote} = useNoteContext();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.note.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.note.tag}</Card.Subtitle>
        <Card.Text>
          {props.note.description}
        </Card.Text>
        <footer className="blockquote-footer">
          {new Date(props.note.date).toLocaleString()}
        </footer>
        <Card.Link onClick={() => deleteNote(props.note._id)}><i className="fa-solid fa-trash"></i></Card.Link>
        <Card.Link><i className="fa-regular fa-pen-to-square"></i></Card.Link>
      </Card.Body>
    </Card>
  )
}
