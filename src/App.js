import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { fetchChats } from './controllers/api';
import InfiniteScroll from 'react-infinite-scroll-component';
import ChatCart from './components/ChatCart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [title, setTitle] = useState("");
  const scrollableDivRef = useRef(null);

  const [chats, setChats] = useState([]);
  const [page, setPage] = useState(0);

  const apiTesting = async () => {
    const data = await fetchChats(0);

    if (data !== false) {
      console.log("DATA-> ", data.data);
      // dispatch(fetchChatsResults(data.data))
      setChats(n=>[...data.data.chats]);
      setFrom(n=>data.data.from);
      setTo(n=>data.data.to);
      setTitle(n=>data.data.name);
    }
  }

  const dum = async () => {
    setPage(page=>page + 1);
    const data = await fetchChats(page);

    if (data !== false) {
      console.log(`DATA page ${page}-> `, data.data);
      // dispatch(addChatsResults(data.data))
      setChats([...chats, ...data.data.chats]);
    }
  }

  useEffect(() => {
    apiTesting();
    // scrollToBottom();
  }, [])


  const handleScroll = () => {
    const { scrollTop } = scrollableDivRef.current;

    // Check if user has scrolled to the top
    if (scrollTop === 0) {
      dum();
    }
  };

  // const scrollToBottom = () => {
  //   const scrollableDiv = scrollableDivRef.current;
  //   scrollableDiv.scrollIntoView({ block: "end" });
  // };


  return (
    <div className="App">

      <Header to={to} from={from} title={title} />
      <div className='app__body'
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        overflowY: 'auto',
        maxHeight: '100vh',
        
      }}
      onScroll={handleScroll}
      ref={scrollableDivRef}
      >
        <InfiniteScroll
          style={{display:"flex", flexDirection:"column-reverse",}}
          dataLength={chats.length} //This is important field to render the next data
          next={dum}
          scrollToBottom={true}
          // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          // inverse={true} //
          
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          inverse={true}
          useWindow={false}
          scrollableTarget="scrollableDiv"
        >
          

            {
              chats.map((chat, index) => {
                if(index===0){
                  return <div style={{marginBottom:"400px"}}><ChatCart key={index} index={index} isKycVerified={chat.sender.is_kyc_verified} message={chat.message} pic={chat.sender.image} self={chat.sender.self} /></div>
                }
                return <ChatCart key={index} index={index} isKycVerified={chat.sender.is_kyc_verified} message={chat.message} pic={chat.sender.image} self={chat.sender.self} />
              })
            }
          
        </InfiniteScroll>

        </div>
      <Footer to={to} />

    </div>
  );
}

export default App;
