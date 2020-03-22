import { v4 as uuid} from 'uuid';

const generateRandomFilename = (filename: string): string => {
  const extensionIndex = filename.lastIndexOf('.');
  return uuid() + filename.substring(extensionIndex);
}

export default generateRandomFilename;