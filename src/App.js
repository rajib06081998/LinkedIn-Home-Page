import React from 'react';
import './App.css';
import Toolbar from './containers/Toolbar/Toolbar';
import Card from './containers/Card/Card';
import Wrapper from './containers/Wrapper'
function App() {
  return (
    <div className="App">
      <Toolbar/>
      <Card />
      <Card />
    </div>
  );
}

export default App;
