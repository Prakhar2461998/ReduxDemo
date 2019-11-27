import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import {Provider} from 'react-redux'
import PostForm from './components/PostForm';
import { createStore, applyMiddleware } from 'redux';


const store = createStore(()=> [], {},applyMiddleware());

class App extends Component {
  render() {
    return (

      <Provider  store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <PostForm />
        <Post />
      </div>
      </Provider>
    );
  }
}

export default App;
