export interface Author {
  id: string;
  name: string;
  imageUrl: string;
  imageSource: string;
  books: string[];
}

export type NewAuthor = Omit<Author, 'id'>;