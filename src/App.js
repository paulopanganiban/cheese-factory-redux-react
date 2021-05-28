import React from 'react';
import Chat from './components/Chat';
import Header from './components/Header';
import Todo from './features/todos/Todo';

function App() {
  return (
    <div className="container">
      <Header/>
      <Chat/>
    </div>
  );
}

export default App;
