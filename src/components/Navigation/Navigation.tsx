import React from 'react';
import { GiNotebook } from 'react-icons/gi';
import UserPhoto from '../../assets/imgs/user.jpg';

import styles from './Navigation.module.scss';

type Props = {};

const Navigation: React.FC = (props: Props) => {
  return (
    <header className={styles.navigation}>
      <a href='/' className={styles.logo}>
        <GiNotebook className={styles.logoIcon} />
        Notebook App
      </a>

      <div className={styles.userWrapper}>
        <div className={styles.userData}>
          <img src={UserPhoto} alt='John Doe' />
        </div>
        <div className={styles.userInformation}>
          <span className={styles.name}>John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
