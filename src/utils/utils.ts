import { NoteTypes } from './types';

const REGEX_SPLIT = /(?:,| |:|;|[.]|[?])+/;

/**
 * Determine the frequency of each word occurrence in a given entry description.
 *
 * @param {string} description
 * @returns {Map<string,number>} Map Object where the Key is the Word and the value is
 *  the amount of times repeated in the initial string.
 */
export const wordFrequencyCalculator = (description: string) => {
  if (description.length === 0) {
    return {};
  }
  const frequencyMap: any = new Map();
  const descriptionArray: Array<string> = description.split(REGEX_SPLIT);
  descriptionArray?.forEach((data) => {
    if (!frequencyMap.has(data)) {
      frequencyMap.set(data, 1);
    } else {
      const itemValue: number = +frequencyMap.get(data) + 1;
      frequencyMap.set(data, itemValue);
    }
  });

  return frequencyMap;
};

/**
 * Determine the frequency of word occurrence in a given entry description.
 *
 * @param description - Entry description
 * @param word - Word requested
 * @returns Return the occurrence of a word on a given description(string).
 */
export const checkWordFrequency = (
  description: string,
  word: string
): number => {
  const frequencyMap = wordFrequencyCalculator(description);

  if (frequencyMap.has(word)) {
    return frequencyMap.get(word);
  } else {
    return 0;
  }
};

/**
 * Sort an Array in Descending Order
 *
 * @param {Array<NoteTypes>} arrayData - Given Array
 * @returns Sorted Array in Descending Order
 */
export const sortedArrayDesc = (
  arrayData: Array<NoteTypes>
): Array<NoteTypes> => {
  return arrayData.sort((a, b) => b.lastModified - a.lastModified);
};

/**
 * Return a Date as a readable string based on the location of the user.
 *
 * @param dateString - Javascript date number.
 * @returns Return a Date as a readable string based on the location of the user.
 */
export const dateToString = (dateString: number) => {
  return new Date(dateString).toLocaleString();
};
