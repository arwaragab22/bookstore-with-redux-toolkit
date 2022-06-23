import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

  
  import Swal from 'sweetalert2';
import { login } from './../redux/login';


  

const Header = () => {
  const loginname = useSelector(state => state.login.loginname);
  const { error } = useSelector(state => state.books);
  const islogin = useSelector(state => state.login.islogin);

  const [name, setname] = useState();
  const disp = useDispatch();

  const handlealert = async () => {
    if (islogin === false) {
       const { value: name } = await Swal.fire({
         title: "Input your name",
         input: "text",
       });
       setname(name);
       if (name) {
         Swal.fire(`welcome: ${name}`);
       }
      disp(login({ islogin: !islogin, loginname: name }));
     
    }
    else {
      disp(login({islogin:false,loginname: " "}))
    }
   
  };
  return (
      <nav className="navbar navbar-dark bg-dark">
          {error && <div className="text-danger">{error}</div>}
      <span className="navbar-brand mb-0 h1">My Books</span>
      <p class="welcome">welcome {name}</p>
      <button className="btn btn-outline-primary" type="submit" onClick={handlealert}>
  {!islogin ? "LogIn":"logout"}
      </button>
    </nav>
  );
};


export default Header;
