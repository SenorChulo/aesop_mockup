//scroll bar overflow is hidden
//body needs to be a flex 
//horizontal scroll bar is hidden using Overflow-x:hidden
/* slider div as animation image container with a relative position 
slide wrapper div with absolute position and transform:translatex to change position dynamically using javascript
*/
//import bootstrap/3.2.0 in App.css for glyphicons to work on left and right buttons using button IDs
//Initializing AromaticProducts state with product details and render each component using map
// set initial  x to 0 using default constructor and use inline style to use translate x
//on button click for left and right, set X to be a negative and positive values respectively

import React,{Component} from 'react';
import './App.css';
import AromaticProducts from './components/AromaticProducts'

class App extends  Component{
  constructor(props){
    super(props);
    this.state={
      x:0,
      leftClicked:false,
      rightClicked:false,

    }
    this.onClickRight=this.onClickRight.bind(this);
    this.onClickLeft=this.onClickLeft.bind(this);

  }
  onClickRight(event){
    event.preventDefault();
    if(this.state.rightClicked===false){
      this.setState({x:-50})
      this.setState({rightClicked:true})
    }
    else{
      this.setState({x:0})
      this.setState({rightClicked:false})
   
    }
  }
  onClickLeft(event){
    event.preventDefault();
    if(this.state.leftClicked===false){
      this.setState({x:50})
      this.setState({leftClicked:true})
    }
    else{
      this.setState({x:0})
      this.setState({leftClicked:false})
   
    }

  }
  render(){
    return (
            <div className='slider'> 
               <button id='back' className='glyphicon glyphicon-chevron-left' onClick={this.onClickLeft}>
              
                </button>
                <div className='slide' style={{'transform':`translateX(${this.state.x}%)`}}>
                  <AromaticProducts/>

               </div>
                <button id='front' className='glyphicon glyphicon-chevron-right' onClick={this.onClickRight}>
              
                </button>
            </div>            
    );
  }

}

export default App;
