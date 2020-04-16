import React from 'react';
import './App.css';
import AromaticProducts from './components/AromaticProducts'

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="header"> 
            HI
        </div>
        <div className="body slider"> 
        <button id='back' className='glyphicon glyphicon-chevron-left'>
            
          </button>
       
          <AromaticProducts/>
          <button id='front' className='glyphicon glyphicon-chevron-right'>
            
          </button>
        </div>

        <div className="footer"> 
          HI
        </div>


      </div>
       </div>
  );
}

export default App;
