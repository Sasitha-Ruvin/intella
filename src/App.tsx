import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  // Function to handle when loading is finished
  const handleLoadingFinish = () => {
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading ? (
        <LoadingScreen onFinish={handleLoadingFinish}/>
      ):(
        <Home/>
      )}
    </div>
    
  );
}

export default App;
