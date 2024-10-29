import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(() => {
  
    return localStorage.getItem('hasLoaded') !== 'true';
  });

  useEffect(() => {
    
    if (!localStorage.getItem('hasLoaded')) {
      setIsLoading(true);
    }
  }, []);


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
