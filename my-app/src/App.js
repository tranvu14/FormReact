import React,{Component} from 'react';
import InfoForm from './components/Form';
import Info from './components/Info';
import {Provider} from 'react-redux';
import './App.css';


import store from './store'
class App extends Component {

  render(){
    return(
     <Provider store={store}>
      <div>
        <InfoForm />
        <Info/>
      </div>
      </Provider>

    );
  }
}
export default App;
