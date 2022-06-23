import React, { Fragment } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { getbooks } from "../redux/bookslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from 'react';


import './book.css';

const PostContainer = () => {
    const disp = useDispatch();
  const state = useSelector((state) => state.books);
  const [selectedbook, setselectedbook] = useState({});
  const books=useSelector(state=>state.books.books)
    useEffect(() => {
      disp(getbooks(90));
    }, []);
  const  getinfobook = (idbook) => {
    const selectedbook = books.find((ele) => {
      return ele.id === idbook;
    });
   setselectedbook(selectedbook)
    console.log(selectedbook);

  }
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList getinfobook={getinfobook}  />
        </div>
        <div className='col side-line'>
          <BookInfo selectedbook={selectedbook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
