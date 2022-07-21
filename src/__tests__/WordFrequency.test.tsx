import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import WordFrequency from '../components/WordFrequency/WordFrequency';

describe('WordFrequency Component', () => {
  it('renders WordFrequency correctly', () => {
    const { queryByTestId, queryByPlaceholderText } = render(
      <WordFrequency description='Word Word Word word' noteId='ID-1' />
    );
    expect(queryByTestId('word-frequency-cmp')).toBeTruthy();
    expect(queryByPlaceholderText('Request frequency of a Word.')).toBeTruthy();
  });

  it('input value changes correctly', () => {
    const { queryByPlaceholderText } = render(
      <WordFrequency description='Word Word Word word' noteId='ID-1' />
    );

    const inputItem: any = queryByPlaceholderText(
      'Request frequency of a Word.'
    );

    fireEvent.change(inputItem, { target: { value: 'Word' } });

    expect(inputItem.value).toBe('Word');
    expect(inputItem.value).not.toBe('word');
  });

  it('Should trigger onClick event when cta is clicked', () => {
    const { queryByTestId, queryByPlaceholderText } = render(
      <WordFrequency description='Word Word Word word' noteId='ID-1' />
    );
    const inputItem: any = queryByPlaceholderText(
      'Request frequency of a Word.'
    );
    const expectedFrequencyValue: string = '3';

    fireEvent.change(inputItem, { target: { value: 'Word' } });
    fireEvent.click(screen.getByText('Request Frequency'));

    expect(queryByTestId('frequency-value')?.textContent).toBe(
      expectedFrequencyValue
    );
  });
});
export {};
