import React, {Component} from 'react';
import './components/slider';
import './App.css';
import Products from './components/slider';
import OpenNav from './components/openNav'
import CloseNav from './components/closeNav'
export default class app extends Component {



  render() {
    return(
      <div>
      <Products/>
      <OpenNav/>
      <CloseNav/>
      </div>
    )
  }
}