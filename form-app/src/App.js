import logo from './logo.svg';
import './App.css';
import { Routes,NavLink, Route,Navigate } from 'react-router-dom';
import BoxList from './compon2/boxList';
import Box from './component1/box';
import { children } from 'react';
import Box1 from './compon3/box1';
import Form from './compon4/validation';
import Box2 from './componBox2/box2';
import Modal from './componModal/modal';
import Login from './login/login';
import { useState,useEffect } from 'react';
import QuestionModal from './componQuestion/question';

function App() {
  const [inputValue, setInputValue] = useState('Hi box 1')
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [IsOpenModalQuestion,setIsOpenModalQuestion] = useState (false);
  


  return (
    <div className="App">

      
    
      <ul>
          <li>  <NavLink to='/'> BoxList</NavLink>  </li>
          <li>  <NavLink to='/box'>Box </NavLink>    </li>
          <li>  <NavLink to='/box1/'>Box1 </NavLink >  </li>
          <li>  <NavLink to='/form//'>Form </NavLink >  </li>
          <li><NavLink to='/modal/'> Modal</NavLink></li>
          <li>  <NavLink to='/box2//'>Box2</NavLink >  </li>
      </ul>
     <Routes>
             <Route element={<BoxList>
              <Form />
              <div className='info'></div>
              
              </BoxList>  }  path='/' />
             <Route element={<Box />} path='/box'/> 
             < Route element={<Box1 />}  path= '/box1/'/>
             < Route element={<Form />}  path= '/form//'/>
             < Route element={<Box2 />}  path= '/box2//'/>
             < Route element={<Modal />}  path= '/box2//'/>
           
     </Routes>

    <div className='P-data'>
    <Box1 inputValue={inputValue} onChange={setInputValue}/>
    <Box2 inputValue={inputValue}/>
    <button onClick={() => setIsOpenModal(true)}>Open Modal Login</button>
    <button onClick={() => setIsOpenModalQuestion(true)}>Open Modal question</button>

    {isOpenModal ? <Modal className='P-login-modal'
                          closeModal={setIsOpenModal}>
      <Login closeModal={setIsOpenModal}/>
    </Modal> : null}


    {IsOpenModalQuestion ? <Modal className='P-login-modal'
                                  closeModal={setIsOpenModalQuestion}>
      <QuestionModal closeModal={setIsOpenModalQuestion}/>
    </Modal> : null}
  </div>

    </div>
  );
}

export default App;
