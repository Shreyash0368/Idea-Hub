import React, {useEffect, useState} from 'react'
import { useNoteContext } from '../NoteContext';
import NoteItem from './NoteItem';
import EditModal from './EditModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NotesDisplay() {
    const { notes, getAllNotes, editNote} = useNoteContext()      
    const [show, setShow] = useState(false)
    
    // this id is only used for editing the note (the handleshow passed to each note sets the id which is used by handle save to make api call)
    const [id, setId] = useState('');
    
    const handleShow = (noteid) => {
        setId(noteid);
        setShow(true);
    }
    const handleClose = () => {setShow(false)}

    const handleSave = (title, tag, description) => {
        // console.log(title, tag, description);
        editNote(id, title, tag, description);
        setShow(false);
    }
    
    useEffect(() => {     
        getAllNotes();      
    }, [])
      
    return (
        <>
            <EditModal show={show} handleClose={handleClose} handleSave={handleSave}/>
            <div className="container my-3">
                <Container>
                    <Row>
                        {notes.map((note) => {
                            return (
                                <Col key={note._id} className="mb-3">
                                    <NoteItem note={note} onEditNote={handleShow}/>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>            
            </div>
        </>
    )
}
