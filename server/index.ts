import express from 'express';
import cors from 'cors';
import fileupload from 'express-fileupload';


import authorRouter from './controllers/author';

const app = express();

app.use(express.json());
app.use(fileupload());

app.use(cors());

app.use('/api/authors',authorRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});