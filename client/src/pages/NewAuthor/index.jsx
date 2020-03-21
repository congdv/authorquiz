import React from 'react';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import AuthorForm from './AuthorForm';

const NewAuthor = () => {
  return (
    <div className="container-fluid">
      <Hero description="Add new author"/>
      <AuthorForm/>
      <Footer />
    </div>
  )
}

export default NewAuthor;