import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    
    const Log = () => {
        navigate('/Login');
    };
    
    const Reg = () => {
        navigate('/Register');
    };
    
    
    const Data = () => {
      navigate('/Data')
    }

  return (
    
    
    
        <div class='main-container'>
        <h1>Main Menu</h1>
        <button onClick={Log}>Login Page</button>
        <br />
        <button onClick={Reg}>Register Page</button>
        <br />
        <button onClick={Data}>Data Page</button>
        <br />
        </div >

  )
}

export default Main