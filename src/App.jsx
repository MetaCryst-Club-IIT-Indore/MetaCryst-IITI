import React, { useState, useEffect } from 'react';
import Pages from './Pages/pages';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Loader from './components/loader/loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;
  else return <Pages />;
}

export default App;
