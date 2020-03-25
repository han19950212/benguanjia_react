import React, {Component} from 'react';
import {GlobalStyle} from './style.js';
import {GlobalStyleIcon} from './static/iconfont/iconfont';
import Tobbar from './common/tobbar';
import {Provider} from 'react-redux';
import store from './store'
class App extends Component{
  render(){
      return (
        <div className="App">
          <GlobalStyle></GlobalStyle>
          <GlobalStyleIcon></GlobalStyleIcon>
          <Provider store={store}>
             <Tobbar></Tobbar>
         
          </Provider>
         
        </div>
      );
  }
}


export default App;
