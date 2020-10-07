import React from 'react';
import './App.css';
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
        <Main />
        <Footer title='Contact info' description='INSERT CONTACT INFO' />
    </React.Fragment>
  );
}

export default App;
