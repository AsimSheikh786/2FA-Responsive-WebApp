import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { AddToken, Header, TokenItem } from './components';

function App() {
  const [isOpen, _isOpen] = useState(false);
  const list = useSelector(state => state.tokenReducer.list);

  return (
    <div className='App relative w-full h-full flex justify-center overflow-y-auto overflow-x-hidden p-6 pt-0'>
      <div className='w-full max-w-3xl h-max space-y-4'>
        {/* HEADER */}
        <Header isOpen={() => _isOpen(true)} />
        {
          list.map((token, index) => (
            <TokenItem key={index} name={token.name} />
          ))
        }
      </div>

      <AddToken isOpen={isOpen} onClose={() => _isOpen(false)} />
    </div>
  );
}

export default App;
