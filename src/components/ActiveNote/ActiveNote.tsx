import { NoteTypes } from '../../utils/types';
import { dateToString } from '../../utils/utils';
import WordFrequency from '../WordFrequency/WordFrequency';
import UpdateContent from '../UpdateContent/UpdateContent';

import styles from './ActiveNote.module.scss';

type Props = {
  activeNote: NoteTypes;
  onUpdateNote: (noteUpdatedData: NoteTypes) => void;
};

const ActiveNote = (props: Props) => {
  const {
    activeNote: { id, title, description, createdDate, lastModified },
    onUpdateNote,
  } = props;

  const onChangeField = (field: string, value: string): void => {
    const noteUpdatedData: NoteTypes = {
      ...props.activeNote,
      [field]: value,
      lastModified: Date.now(),
    };

    onUpdateNote(noteUpdatedData);
  };

  return (
    <article className={styles.activeNote}>
      <UpdateContent
        title={title}
        description={description}
        onChangeField={onChangeField}
      />

      <div className={styles.previewWindow}>
        <span className={styles.title}>Preview</span>
        <h1 className={styles.titlePreview}>{title}</h1>
        <p className={styles.descriptionPreview}>{description}</p>
      </div>

      <div className={styles.generalWindow}>
        <span className={styles.title}>General Data</span>
        <small>
          Created:
          {dateToString(createdDate)}
        </small>
        <small>
          Last Modified:
          {dateToString(lastModified)}
        </small>
      </div>

      <WordFrequency description={description} noteId={id} />
    </article>
  );
};

export default ActiveNote;
