import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
const BookInfo = ({ selectedbook }) => {
  const islogin = useSelector(state => state.login.islogin);
  const username = selectedbook.username;
  const books = useSelector((state) => state.books.books.username);
  console.log(books)
  console.log("info");
  console.log(islogin)
  return (
    <Fragment>
      <h2>Book Details</h2>
      {(Object.keys(selectedbook).length <= 0)|| !islogin?(
        <div className="alert alert-secondary" role="alert">
          There is no post selected yet. Please select!
        </div>) : (
        <div>
          <p className='fw-bold'> title:{selectedbook.title}</p>
            <p className='fw-light'>Description:{selectedbook.description}</p>
            <p className='fst-italic'>Price:{selectedbook.price}</p>
        </div>)}
    </Fragment>
  );
};

export default BookInfo;
