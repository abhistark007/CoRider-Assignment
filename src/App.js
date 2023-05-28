import React, { useEffect, useState } from 'react';
import './App.css';
// import { useDispatch } from 'react-redux';
import { fetchChats } from './controllers/api';
// import { toast } from 'react-toastify';
// import { addChatsResults, fetchChatsResults } from './store/chatsSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import ChatCart from './components/ChatCart';
import Header from './components/Header';

function App() {

  // const dispatch=useDispatch();
  const [from,setFrom]=useState("");
  const [to,setTo]=useState("");
  const [title,setTitle]=useState("");

  const [chats,setChats]=useState([]);
  const [page,setPage]=useState(0);

  const apiTesting=async()=>{
    const data=await  fetchChats(0);

    if(data!==false){
      console.log("DATA-> ",data.data);
      // dispatch(fetchChatsResults(data.data))
      setChats([...data.data.chats]);
      setFrom(data.data.from);
      setTo(data.data.to);
      setTitle(data.data.name);
    }
  }

  const dum=async()=>{
    setPage(page+1);
    const data=await  fetchChats(page);
    
    if(data!==false){
      console.log(`DATA page ${page}-> `,data.data);
      // dispatch(addChatsResults(data.data))
      setChats([...chats,...data.data.chats]);
    }
  }

  useEffect(()=>{
    apiTesting();
  },[])


  return (
    <div className="App">
       
        <Header to={to} from={from} title={title}/>
        
        <InfiniteScroll
          dataLength={chats.length} //This is important field to render the next data
          next={dum}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          >
            <div className='app__body'>
            
            {
              chats.map((chat,index)=>{
                return <ChatCart key={index} message={chat.message} pic={chat.sender.image} self={chat.sender.self} />
              })
            }
            </div>
          </InfiniteScroll>
       
    </div>
  );
}

export default App;
