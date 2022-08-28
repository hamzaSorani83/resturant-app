import './App.css';

import { Header, MainContainer, CreateContainer } from './components';

import { Routes, Route } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion'

import { Spinner, Overlay } from './components';
import { useAppSelector } from './store/hooks';
import { selectLoading } from './store/features/mainReducer';

function App() {
  const loading = useAppSelector(selectLoading);
  const spinner = loading ? <Spinner /> : null;
  return (
    <AnimatePresence> 
      <div className='w-screen h-auto flex-col bg-primary'>
        <Overlay  />
        {spinner}
        <Header />
        <main className='p-8 w-full'>
          <Routes>
            <Route path='/' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
