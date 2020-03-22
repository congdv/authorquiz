import data from '../data/authors.json';
import { v4 as uuidv4 } from 'uuid';

import { Author, NewAuthor } from '../types';

const authors: Author[] = data as Array<Author>;

const getAuthors = (): Author[] => {
  return authors.map(author => {
    if(!author.id) {
      author.id = uuidv4();
    }
    return author;
  });
}

const addAuthor = (entry: NewAuthor) => {
  const newAuthorEntry: Author = {
    id: uuidv4(),
    ...entry
  }
  authors.push(newAuthorEntry);
  return newAuthorEntry;
}

export default {
  getAuthors,
  addAuthor,
}