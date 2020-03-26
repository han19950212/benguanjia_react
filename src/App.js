import React, {Component} from 'react';
import {GlobalStyle} from './style.js';
import {GlobalStyleIcon} from './static/iconfont/iconfont';
import Tobbar from './common/tobbar';
import {Provider} from 'react-redux';
import Home from './page/home';
import Order from './page/order';
import Mine from './page/mine';
import Single from './page/single';
import store from './store';
import {BrowserRouter,Route} from 'react-router-dom';
class App extends Component{
  render(){
      return (
        <div className="App">
          <GlobalStyle></GlobalStyle>
          <GlobalStyleIcon></GlobalStyleIcon>
          <Provider store={store}>
            <BrowserRouter>
              <Route path='/' exact component={Home}></Route>
              <Route path='/mine' exact component={Mine}></Route>
              <Route path='/single' exact component={Single}></Route>
              <Route path='/order' exact component={Order}></Route>

              <Tobbar></Tobbar>
             </BrowserRouter>
          </Provider>
         
        </div>
      );
  }
}


export default App;
