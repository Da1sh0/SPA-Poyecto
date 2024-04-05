import React, { useState } from 'react';
import Home from './components/Home';
import RegistroEntidad from './components/RegistroEntidad';
import ListarEntidad from './components/ListarEntidad';
import './components/style/styles.css';


function App() {
  const [route, setRoute] = useState('home');

  const renderPage = () => {
    switch (route) {
      case 'home':
        return <Home setRoute={setRoute} />;
      case 'RegistroEntidad':
        return <RegistroEntidad setRoute={setRoute} />;
      case 'ListarEntidad':
        return <ListarEntidad setRoute={setRoute} />;
      default:
        return <Home setRoute={setRoute} />;
    }
  };

  return (
    <>
    {renderPage()}
    </>
  );
}

export default App;
