import React from 'react';
import Toolbar from './containers/Toolbar/Toolbar';
import Card from './containers/Card/Card';
import Wrapper from './containers/Wrapper'
function App() {
  return (
    <div className="App">
      <Toolbar/>
      <div className="Cards">
        <Wrapper>
          <Card />
          <Card />
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
