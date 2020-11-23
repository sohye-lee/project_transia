import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//Components
import Main from './components/Main/Main';





function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Main />
      </div>
    </BrowserRouter>
  )
}

export default App;