import React, { useState } from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import AutosizeInput from 'react-tagsinput';
import axios from 'axios';
import Progress from '../../components/Progress';
import Message from '../../components/Message';


import 'react-tagsinput/react-tagsinput.css' ;
import { useField } from '../../hooks';

import { BASE_URL } from '../../utils/api';


const validate = values => {
  const errors = {};

  if(!values.authorName || values.authorName.length < 1) {
    errors.authorName = 'Required';
  }

  return errors;
}


const AuthorForm = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('');
  const [books, setBooks] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [uploadFile, setUploadFile] = useState({});
  const authorName = useField('text');
  const imageSource = useField('text');

  const formik = useFormik({
    initialValues: {
      authorName:'',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log('formik submit-------');
    }
  })

  const onChange = (books) => {
    setBooks(books);
  }
  const onUpload = event => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  }
  const onSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set('name',authorName.value);
    formData.set('imageSource',imageSource.value)
    books.map( book => {
      formData.append('books', book);
    })
    if(books.length === 1) {
      formData.append('books', books[0]);
    }
    formData.append('file',file);
    console.log(authorName,imageSource,books);

    try {
      const resp = await axios.post(`${BASE_URL}/api/authors`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setUploadFile(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="row">
    <div className="col-md-4 offset-1">
      <div className="card card-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="authorName">Author Name</label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              value={formik.values.authorName}
              onChange={formik.handleChange}
              className="form-control"
              placeholder="Enter Author Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorPicture">Author Picture</label>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="authorPicture" onChange={onUpload}/>
              <label className="custom-file-label" htmlFor="authorPicture">
                {filename}
              </label>
            </div>
            <Progress percentage={percentage}/>
          </div>
          <div className="form-group">
            <label htmlFor="imageSource">Author Name</label>
            <input
              type={imageSource.type}
              value={imageSource.value}
              onChange={imageSource.onChange}
              id="imageSource"
              name="imageSource"
              className="form-control"
              placeholder="Enter Picture source"
            />
          </div>
          <div className="form-group">
            <label>Author Books</label>
            <AutosizeInput type="text" value={books} onChange={onChange}/>
          </div>
          <button type="submit" className="btn btn-primary btn-block col-md-4 mt-5 m-auto">Submit</button>
        </form>
        {formik.errors.authorName ? <div>{formik.errors.authorName}</div> : null}
      </div>
    </div>
    <div className="col-md-6 offset-1">
      {
        uploadFile ? 
        <div>
          <h3>{uploadFile.name}</h3>
          <img src={uploadFile.imageUrl} alt={uploadFile.name}/>
        </div>
        : null
      }
    </div>
  </div>
  )
}

export default AuthorForm;