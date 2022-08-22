import React from 'react';

import './App.css';

import Header from './components/Header/Header';

import { BrowserRouter  } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='w-screen h-auto flex-col'>
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
