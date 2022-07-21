import cx from 'classnames';

import styles from './Frequency.module.scss';

type Props = {};

const Frequency = (props: Props) => {
  return (
    <div className={cx(styles.frequencyAndSimilarWindow)}>
      <span className={styles.title}>Frequency and Similar Words</span>
      <div className={styles.frequency}>
        Frequency: <span>3</span>
      </div>
      <span className={styles.title}>Similar Words</span>
      <ul>
        <li>Word 1</li>
        <li>Word 2</li>
      </ul>
    </div>
  );
};

export default Frequency;
