
import React from 'react';
import ReactDOM from 'react-dom';

// create a new component that produces html

const App = () => <div>Hi!</div>; 

// take this compontent's generated html and put it on the Dom

//pass instance instead of class
ReactDOM.render(<App />, document.querySelector('.container'));