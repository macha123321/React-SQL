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
    
    
    
        <>
        <h1>Main Menu</h1>
        <button onClick={Log}>Login Page</button>
        <br /><br /><br />
        <button onClick={Reg}>Register Page</button>
        <br /><br /><br />
        <button onClick={Data}>Data Page</button>
        <br /><br /><br />
        </>

  )
}

export default Main