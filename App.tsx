import React from 'react';
import Home from './pages/Home';
import { Toaster } from 'sonner';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Toaster position="bottom-right" />
    </>
  );
};

export default App;