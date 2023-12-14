import React, {useEffect} from 'react'
import { useNoteContext } from '../NoteContext';
import NoteItem from './NoteItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NotesDisplay() {
    const { notes, getAllNotes } = useNoteContext()  
    useEffect(() => {     
        getAllNotes();      
    }, [])
      
    return (
        <div className="container my-3">
            <Container>
                <Row>
                    {notes.map((note) => {
                        return (
                            <Col key={note._id} className="mb-3">
                                <NoteItem note={note} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>            
        </div>
    )
}
