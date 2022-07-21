import styles from './SimilarWords.module.scss';

type Props = {
  similarWords: string[];
};

const SimilarWords = (props: Props) => {
  const { similarWords } = props;
  return (
    <ul>
      {similarWords?.map((word: string, index: number) => (
        <li key={index} className={styles.item}>{word}</li>
      ))}
    </ul>
  );
};

export default SimilarWords;
