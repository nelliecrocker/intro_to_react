import { useState } from 'react'

import Navbar from './components/Navbar'
import Post from './components/Post'
import Status from './components/Status'
import StatusEditor from './components/StatusEditor'

import './App.css';

function App() {
  const [currentStatus, setCurrentStatus] = useState("Feeling like it's time to code")

  return (
    <div className="App">
      <Navbar />
        <Status status={currentStatus} />
        <StatusEditor setCurrentStatus={setCurrentStatus}/>
      
      <header className="App-header">
        <Post
          date="5/12"
          title="Hello world"
          content="This is the post content" />
        <Post
          date="5/13"
          title="Hello world"
          content="This is the post content 2" />
      </header>
    </div>
  );
}


export default App;
