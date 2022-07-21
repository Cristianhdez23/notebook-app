import { NoteTypes } from './types';

const REGEX_SPLIT = /(?:,| |:|;|[.]|[?])+/;

const wordFrequencyCalculator = (description: string) => {
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

export const checkWordFrequency = (description: string, word: string) => {
  const frequencyMap = wordFrequencyCalculator(description);

  if (frequencyMap.has(word)) {
    return frequencyMap.get(word);
  } else {
    return '0';
  }
};

export const sortedArrayDesc = (arrayData: Array<NoteTypes>) => {
  return arrayData.sort((a, b) => b.lastModified - a.lastModified);
};

export const dateToString = (dateString: number) => {
  return new Date(dateString).toLocaleDateString('es-CO', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};
