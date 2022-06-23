
import './App.css';
import Header from './component/header';
import Addform from './component/addbook';
import BookContainer from './component/BookContainer';
import { useEffect } from 'react';
import { getbooks } from './redux/bookslice';
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";




function App() {


  return (
    <div className="App">
    <Header/>
     
      <div className="container">
        <Addform />
        <BookContainer />
      </div> 
    </div>
  );
}

export default App;
