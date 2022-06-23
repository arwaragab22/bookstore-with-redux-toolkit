import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { useState } from 'react';

import { deletebook,insertbook } from "../redux/bookslice.js";
const BooksList = ({getinfobook}) => {
  const ispending = useSelector(state => state.books.ispending);
  const books = useSelector((state) => state.books.books);
  const islogin = useSelector((state) => state.login.islogin);
  const loginname = useSelector(state => state.login.loginname);
  const [selectedbook, setselectedbook] = useState();
  const d = useDispatch();

return (
   
    <div>
      {!ispending ? (<React.Fragment>
        <h2>Books List</h2>
        <ul className='list-group'>
          {books.length > 0 && books.map((ele) => {
            if (ele.username === loginname) {
          
              return (
                <li className="list-group-item d-flex  justify-content-between align-items-center">
                  <div> {ele.title}</div>
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={!islogin}
                      onClick={() => { getinfobook(ele.id) }
                      }
                    >
                      Read
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      disabled={!islogin}
                      onClick={() => {
                        d(deletebook(ele)).unwrap()
    .then((originalPromiseResult) => {
     console.log(originalPromiseResult)
    })
    .catch((rejectedValueOrSerializedError) => {
      // handle error here
    })
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )
            }
        
           
          
          })
            
      
          
   
            
        }
          
        
          
         
        </ul>
      
      </React.Fragment>
     
      ) : ("...LOADING")
      }
    </div >
    
  );
};

export default BooksList;
