import express from 'express';
import authorService from '../services/authorService';
import { toNewAuthorEntry } from '../utils'

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(authorService.getAuthors());
})
router.post('/', (req, res) => {
  if(req.files === null) {
    return res.status(400).json({message: 'No file uploaded'});
  }
  try {
    console.log(req.body);
    const newAuthor = toNewAuthorEntry(req);
    const addedAuthor = authorService.addAuthor(newAuthor);
    return res.json(addedAuthor);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});
export default router;