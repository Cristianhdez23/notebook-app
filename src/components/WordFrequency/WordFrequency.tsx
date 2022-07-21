import cx from 'classnames';
import { useState, useEffect } from 'react';
import { checkWordFrequency, wordFrequencyCalculator } from '../../utils/utils';
import Button from '../Button/Button';
import SimilarWords from '../SimilarWords/SimilarWords';
import { levenshteinEditDistance } from 'levenshtein-edit-distance';

import styles from './WordFrequency.module.scss';

type Props = {
  description: string;
  noteId: string;
};

const WordFrequency = (props: Props) => {
  const { noteId, description } = props;
  const [frequencyInputValue, setFrequencyInputValue] = useState<string>('');
  const [frequency, setFrequency] = useState<string>('');
  const [similarWords, setSimilarWords] = useState<string[]>([]);

  const requestWordOnClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (frequencyInputValue.length === 0 || description.length === 0) {
      setFrequency('Please type a word on the input field.');
    } else {
      const frequencyValue: string = checkWordFrequency(
        description,
        frequencyInputValue
      );
      setFrequency(frequencyValue);
      validateSimilarWords();
    }
  };

  const validateSimilarWords = () => {
    const frequencyArray = wordFrequencyCalculator(description);
    const similarWordsArray: string[] = [];
    frequencyArray.forEach((value: number, key: string) => {
      if (levenshteinEditDistance(frequencyInputValue, key) === 1) {
        similarWordsArray.push(key);
      }
    });
    setSimilarWords(similarWordsArray);
  };

  useEffect(() => {
    setFrequencyInputValue('');
    setFrequency('');
    setSimilarWords([]);
  }, [noteId]);

  return (
    <div className={cx(styles.frequencyAndSimilarWindow)}>
      <span className={styles.title}>Frequency and Similar Words</span>
      <input
        className={styles.frequencyInput}
        type='text'
        id='Word Frequency'
        placeholder='Request frequency of a Word.'
        value={frequencyInputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFrequencyInputValue(e.target.value)
        }
      />
      <Button
        btnText={'Request Frequency'}
        handleOnClickEvent={requestWordOnClickHandler}
        smallVersion
      />
      <div className={styles.frequency}>
        Frequency: <span>{frequency}</span>
      </div>
      <span className={styles.title}>Similar Words</span>
      <SimilarWords similarWords={similarWords} />
    </div>
  );
};

export default WordFrequency;
