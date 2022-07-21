import cx from 'classnames';
import Button from '../Button/Button';
import React from 'react';
import { TbNotebook, TbTrash } from 'react-icons/tb';

import styles from './Sidebar.module.scss';

type Props = {
  onAddNote: React.MouseEventHandler<HTMLButtonElement>;
};

const Sidebar = (props: Props) => {
  const { onAddNote } = props;

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navWrapper}>
        <a className={cx(styles.navItem, styles.active)} href='/'>
          <TbNotebook className={styles.navItemIcon} />
          All notes
        </a>
        <a className={cx(styles.navItem)} href='/'>
          <TbTrash className={styles.navItemIcon} />
          Trash
        </a>
      </nav>

      <div className={styles.ctaWrapper}>
        <Button btnText={'Add a new entry'} handleOnClickEvent={onAddNote} />
      </div>
    </aside>
  );
};

export default Sidebar;
