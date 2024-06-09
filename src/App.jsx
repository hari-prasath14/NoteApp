import React from 'react';
import NoteMainPage from './NoteMainPage';
import { Provider } from 'react-redux';
import { store } from './Features/NoteStore';

const App = () => {
  return (
    <div className='row'>
      <div className='col'>
      <Provider store = {store} >
      <NoteMainPage />
      </Provider>
      </div>      
    </div>
  );
};

export default App;