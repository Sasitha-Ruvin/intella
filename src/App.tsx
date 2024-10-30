import React, { useEffect, useState } from 'react';
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
    localStorage.setItem('hasLoaded', 'true'); 
  };

  return (
    <div>
      {isLoading ? (
        <LoadingScreen onFinish={handleLoadingFinish} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
