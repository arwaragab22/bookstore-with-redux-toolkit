import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { insertbook } from '../redux/bookslice';


const Addform = () => {
  const a = useRef();
  const b = useRef();
  const c = useRef();
  const disp = useDispatch();
  const islogin = useSelector(state => state.login.islogin);
  const handesubmit = (event) => {
      event.preventDefault();
    disp(insertbook({
      title: a.current.value,
      price: b.current.value,
      description: c.current.value
    })
   
    
    )
      a.current.value=b.current.value=c.current.value=""
    
   }
  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={handesubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" required ref={a} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" className="form-control" id="price" required  ref={b}/>
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              id="Description"
              rows="3"
              required
              ref={c}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={!islogin}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
