import React,{Component} from 'react';
import './App.css';
import AromaticProducts from './components/AromaticProducts'

class App extends  Component{
  constructor(props){
    super(props);
    this.state={
      x:0
    }
    this.onClickRight=this.onClickRight.bind(this);
    this.onClickLeft=this.onClickLeft.bind(this);

  }
  onClickRight(event){
    event.preventDefault();
    this.setState({x:50})
  }
  onClickLeft(event){
    event.preventDefault();
    this.setState({x:-50})

  }
  render(){
    return (
      <div className="App">
        <div className="page">
          <div className="header"> 
              HI
          </div>
          <div className='body'>
            <div className='slider'> 
               <button id='back' className='glyphicon glyphicon-chevron-left' onClick={this.onClickLeft}>
              
                </button>
                <div className='slide' style={{'transform':`translateX(${this.state.x}%)`}}>
                  <AromaticProducts/>

               </div>
                <button id='front' className='glyphicon glyphicon-chevron-right' onClick={this.onClickRight}>
              
                </button>
            </div>
          </div>
          <div className="footer"> 
            HI
          </div>
  
  
        </div>
         </div>
    );
  }

}

export default App;
