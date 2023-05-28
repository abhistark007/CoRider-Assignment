import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from './controllers/api';
import { toast } from 'react-toastify';
import { fetchChatsResults } from './store/chatsSlice';

function App() {

  const dispatch=useDispatch();
  const {value}=useSelector((state)=>state.chat);

  const apiTesting=async()=>{
    const data=await  fetchChats(0);

    if(data!==false){
      console.log("DATA-> ",data.data);
      dispatch(fetchChatsResults(data.data))
    }
  }

  useEffect(()=>{
    apiTesting();
  },[])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
