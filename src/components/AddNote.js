import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useNoteContext } from '../NoteContext';

export default function AddNote() {
    const { addNote } = useNoteContext();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleTagChange = (e) => {
        setTag(e.target.value);
    }

    return (
        <div className="container my-3">
            <h2>Create A New Note</h2>
            <Form onSubmit={(e) => { e.preventDefault() }}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="HW/Grocceries/.."
                        value={title}
                        onChange={handleTitleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTag">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="General/Work/.."
                        value={tag}
                        onChange={handleTagChange}
                    />
                </Form.Group>
                <InputGroup>
                    <InputGroup.Text>Description</InputGroup.Text>
                    <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        value={description}
                        onChange={handleDescriptionChange} 
                    />
                </InputGroup>
                <Button className='my-2' variant="primary" type="submit" onClick={() => addNote(title, tag, description)}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
