import React from 'react'

import NotesDisplay from './NotesDisplay';
import AddNote from './AddNote'

export default function Home() {

  return (
    <div className='container my-3'>
      <AddNote />      
      <NotesDisplay />
    </div>
  )
}
