import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
//import ImageAdd from './Components/ImageAdd';
//import ImageUploader from './Components/ImageUploader';
//import FileUpLoader from './Components/fileuploader/FileUpLoader';

function App() {
  // const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch('/api/time').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  return (
    <div className="App">
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
