import React from 'react';

import styles from './UpdateContent.module.scss';

type Props = {
  title: string;
  description: string;
  onChangeField: (field: string, value: string) => void;
};

const UpdateContent = (props: Props) => {
  const { title, description, onChangeField } = props;
  return (
    <div className={styles.editWindow}>
      <label className={styles.input}>
        Title
        <input
          type='text'
          id='title'
          placeholder='Note Title'
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeField('title', e.target.value)
          }
          autoFocus
        />
      </label>

      <label className={styles.input}>
        Description
        <textarea
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChangeField('description', e.target.value)
          }
        />
      </label>
    </div>
  );
};

export default UpdateContent;
