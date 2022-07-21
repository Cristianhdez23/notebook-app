import React, { useState, useId, useEffect } from 'react';
import Homepage from './pages/Homepage/Homepage';
import Sidebar from './components/Sidebar/Sidebar';
import { NoteTypes } from './utils/types';

import styles from './App.module.scss';

const App: React.FC = () => {
  const [notesArray, setNotesArray] = useState<NoteTypes[]>(
    localStorage.notebookEntries ? JSON.parse(localStorage.notebookEntries) : []
  );
  const [activeNote, setActiveNote] = useState<string>('');
  const id = useId();

  const onAddNote = () => {
    const newNote: NoteTypes = {
      id: id + Date.now(),
      title: 'Untitled Note',
      description: '',
      createdDate: Date.now(),
      lastModified: Date.now(),
    };

    setNotesArray([newNote, ...notesArray]);
    setActiveNote(newNote.id);
  };

  const onUpdateNote = (updatedNote: NoteTypes) => {
    const updatedNotesArr = notesArray.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotesArray(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notesArray.find(({ id }) => id === activeNote);
  };

  useEffect(() => {
    localStorage.setItem('notebookEntries', JSON.stringify(notesArray));
  }, [notesArray]);

  return (
    <main className={styles.mainWrapper}>
      <Sidebar onAddNote={onAddNote} />
      <main className={styles.mainWrapper}>
        <Homepage
          notesArray={notesArray}
          activeNote={getActiveNote()}
          setActiveNote={setActiveNote}
          onUpdateNote={onUpdateNote}
        />
      </main>
    </main>
  );
};

export default App;
