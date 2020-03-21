import React, { useState } from 'react';
import AutosizeInput from 'react-tagsinput';
import Progress from '../../components/Progress';
import Message from '../../components/Message';

import 'react-tagsinput/react-tagsinput.css' ;

const AuthorForm = () => {
  const [tags, setTags] = useState([]);
  const [percentage, setPercentage] = useState(0);
  console.log(tags.map(tag => console.log(tag)));
  const onChange = (tags) => {
    setTags(tags);
  }

  return (
    <div className="row">
    <div className="col-md-6 offset-1">
      <div className="card card-body">
        <form>
          <div className="form-group">
            <label htmlFor="authorName">Author Name</label>
            <input
              type="email"
              id="authorName"
              name="authorName"
              className="form-control"
              placeholder="Enter Author Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorPicture">Author Picture</label>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="authorPicture"/>
              <label className="custom-file-label" htmlFor="authorPicture">
              </label>
            </div>
            <Progress percentage={percentage}/>
          </div>
          <div className="form-group">
            <label>Author Books</label>
            <AutosizeInput type="text" value={tags} onChange={onChange}/>
          </div>
          <button type="submit" className="btn btn-primary btn-block col-md-4 mt-5 m-auto">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AuthorForm;