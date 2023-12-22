import { createContext, useState, useContext } from "react";
const MyContext = createContext();

const NoteProvider = (props) => {
  const host = "http://localhost:5000";
  const initialNote = [];
  const [notes, setNotes] = useState(initialNote);

  const getAllNotes = async () => {
    // getting data from backend
    try {
      const response = await fetch(`${host}/api/notes/fetchall`, {
        method: "GET",
        headers: {
          "Authorization": localStorage.getItem('authToken'),
        }
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // updating client side
      const data = await response.json();
      setNotes(data.notes);
    } catch (error) {
      console.error("Error adding note:", error.message);
    }
  };

  const addNote = async (title, tag, description) => {
    // sending data to backend using fetch api
    try {
      const response = await fetch(`${host}/api/notes/createnote`, {
        method: "POST",
        headers: {
          "Authorization": localStorage.getItem('authToken'),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          tag: tag || 'General',
          description: description,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // updating client side
      const note = await response.json();
      setNotes((notes) => [...notes, note.savedNote]);
    } catch (error) {
      console.error("Error adding note:", error.message);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": localStorage.getItem('authToken'),
          "Content-Type": "application/json",
        }
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const res = await response.json();
    } catch (error) {
      console.error("Error adding note:", error.message);
    }

    const updatedNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(updatedNotes);
  };

  const editNote = async (id, updatedTitle, updatedTag, updatedDescription) => {   
    // TODO: add functionality to fetch new data either by creating a new window or from existing form
    
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Authorization": localStorage.getItem('authToken'),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updatedTitle,
          tag: updatedTag,
          description: updatedDescription,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const resp = await response.json();
      const note = resp.note;

      const noteIndex = notes.findIndex((note) => note._id === id);
      const updatedNotes = [...notes];
      updatedNotes.splice(noteIndex, 1, note);
      setNotes(updatedNotes);

    } catch (error) {
      console.error("Error adding note:", error.message);
    }
  };

  return (
    <MyContext.Provider value={{ notes, addNote, deleteNote,editNote, getAllNotes }}>
      {props.children}
    </MyContext.Provider>
  );
};

const useNoteContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
export { NoteProvider, useNoteContext };
