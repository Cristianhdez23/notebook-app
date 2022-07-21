import React from 'react';
import ActiveNote from '../../components/ActiveNote/ActiveNote';
import Note from '../../components/Note/Note';
import { NoteTypes } from '../../utils/types';
import { sortedArrayDesc } from '../../utils/utils';

import styles from './Homepage.module.scss';

type Props = {
  activeNote: NoteTypes | undefined;
  notesArray: NoteTypes[];
  setActiveNote: React.Dispatch<React.SetStateAction<string>>;
  onUpdateNote: (noteUpdatedData: NoteTypes) => void;
};

const Homepage = (props: Props) => {
  const { activeNote, notesArray, setActiveNote, onUpdateNote } = props;
  const sortedNotesDesc = sortedArrayDesc(notesArray);

  return (
    <section className={styles.content}>
      <section className={styles.noteList}>
        {sortedNotesDesc.length > 0 &&
          sortedNotesDesc?.map((noteData) => (
            <Note
              key={noteData.id}
              noteData={noteData}
              setActiveNote={setActiveNote}
            />
          ))}
        {sortedNotesDesc?.length === 0 && (
          <span className={styles.noNotesMsg}>No Notes</span>
        )}
      </section>
      {activeNote && (
        <section className={styles.activeNote}>
          <ActiveNote activeNote={activeNote} onUpdateNote={onUpdateNote} />
        </section>
      )}
    </section>
  );
};

export default Homepage;
