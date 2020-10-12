import React from 'react';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Contacts from './components/Contacts';

const contacts = [
  {
    id: 1,
    url: 'mailto:decio.msoares@gmail.com',
    label: 'decio.msoares@gmail.com'
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/deciomsoares/',
    label: 'Linkedin'
  },
  {
    id: 3,
    url: 'https://github.com/dmsoares',
    label: 'Github'
  },
  {
    id: 4,
    url: 'https://codepen.io/dmsoares',
    label: 'Codepen'
  },
]

function App() {
  return (
    <React.Fragment>
        <Main />
        <Footer title='Look me up!'><Contacts contacts={contacts}/></Footer>
    </React.Fragment>
  );
}

export default App;
