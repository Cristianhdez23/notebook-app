import { wordFrequencyCalculator, checkWordFrequency } from '../utils/utils';

describe('Utils Functions', () => {
  it('wordFrequencyCalculator should return a Map object with to Items.', () => {
    const description: string = 'Word Word Word word';
    const expectedResult = new Map([
      ['Word', 3],
      ['word', 1],
    ]);

    const wordFrequency: Map<string, number> =
      wordFrequencyCalculator(description);

    expect(wordFrequency).toEqual(expectedResult);
  });

  it('wordFrequencyCalculator should return an empty object.', () => {
    const description: string = '';

    const wordFrequency: Map<string, number> =
      wordFrequencyCalculator(description);

    expect(wordFrequency).toEqual({});
  });

  it('wordFrequencyCalculator should omit the following characters: , : ; . ?', () => {
    const description: string =
      'string1?.string1; string1.  string2? string4, string4';
    const expectedResult = new Map([
      ['string1', 3],
      ['string2', 1],
      ['string4', 2],
    ]);

    const wordFrequency: Map<string, number> =
      wordFrequencyCalculator(description);

    expect(wordFrequency).toEqual(expectedResult);
  });

  it('checkWordFrequency should calculate the amount of time a word is repeated in a string.', () => {
    const description: string = 'Word Word Word word';
    const stringToSearch: string = 'Word';
    const secondStringToSearch: string = 'Hello';
    const firstExpectedResult: number = 3;
    const secondExpectedResult: number = 0;

    const firstWordFrequency: number = checkWordFrequency(
      description,
      stringToSearch
    );
    const secondWordFrequency: number = checkWordFrequency(
      description,
      secondStringToSearch
    );

    expect(firstWordFrequency).toEqual(firstExpectedResult);
    expect(secondWordFrequency).toEqual(secondExpectedResult);
  });
});

export {};
