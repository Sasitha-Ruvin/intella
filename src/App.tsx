import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(() => {
    // Check if loading animation has already played
    return localStorage.getItem('hasLoaded') !== 'true';
  });
  


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
