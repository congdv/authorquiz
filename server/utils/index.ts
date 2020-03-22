import { NewAuthor } from '../types';
import path from 'path';
import futils from './futils';

const uploadFile = (file: any): string => {
  const storageDir: string = "/images/authors/";
  const destinationDir: string = path.resolve(__dirname,'../../client/public/images/authors/');
  const generatedFileName = futils(file.name);
  const destinationPath: string = path.join(destinationDir,generatedFileName);
  const returnedPath: string = path.join(storageDir,generatedFileName)
  try {
    file.mv(destinationPath);
    return returnedPath;
  } catch(error) {
    console.log(error);
    throw error;
  }
}

export const toNewAuthorEntry = (object: any): NewAuthor => {
  const newEntry: NewAuthor = {
    name: object.body.name,
    imageUrl: uploadFile(object.files.file),
    books: object.body.books,
    imageSource: object.body.imageSource,
  };
  return newEntry;
}
