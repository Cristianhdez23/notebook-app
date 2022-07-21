import React from 'react';
import { IoMdCreate } from 'react-icons/io';

import styles from './Button.module.scss';

type Props = {
  btnText: string;
  handleOnClickEvent: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: Props) => {
  const { btnText, handleOnClickEvent } = props;
  return (
    <button className={styles.cta} onClick={handleOnClickEvent}>
      <IoMdCreate className={styles.ctaIcon} />
      {btnText}
    </button>
  );
};

export default Button;
