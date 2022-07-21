import React from 'react';
import cx from 'classnames';
import { IoMdCreate } from 'react-icons/io';

import styles from './Button.module.scss';

type Props = {
  btnText: string;
  handleOnClickEvent: React.MouseEventHandler<HTMLButtonElement>;
  smallVersion?: boolean;
  showIcon?: boolean;
};

const Button = (props: Props) => {
  const { btnText, handleOnClickEvent, showIcon, smallVersion } = props;
  return (
    <button
      className={cx(styles.cta, { [styles.small]: smallVersion })}
      onClick={handleOnClickEvent}
    >
      {showIcon && <IoMdCreate className={styles.ctaIcon} />}
      {btnText}
    </button>
  );
};

export default Button;
