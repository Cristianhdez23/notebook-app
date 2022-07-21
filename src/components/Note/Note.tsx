import React from 'react';
import { NoteTypes } from '../../utils/types';
import { dateToString } from '../../utils/utils';

import styles from './Note.module.scss';

type Props = {
  noteData: NoteTypes;
  setActiveNote: React.Dispatch<React.SetStateAction<string>>;
};

const Note = (props: Props) => {
  const {
    noteData: { id, title, description, lastModified },
    setActiveNote,
  } = props;

  return (
    <button className={styles.noteBtn} onClick={() => setActiveNote(id)}>
      <article className={styles.note}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <small className={styles.date}>
          Last Modified: {dateToString(lastModified)}
        </small>
      </article>
    </button>
  );
};

export default Note;
