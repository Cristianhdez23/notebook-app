import { NoteTypes } from './types';

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
