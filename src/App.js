
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Imagecontainer from './components/Imagecontainer';
import Article from './components/Article';
import Diseases from './components/Diseases';
import Videos from './components/Videos';
import Numbers from './components/Numbers';
import Doctors from './components/Doctors';

function App() {
  return (
    <div>
     <div className="sticky-header"> <Navbar /></div>
     <Imagecontainer/>
     <Numbers/>
     <Article></Article>
     <Doctors/>
     <Diseases/>
      <Videos/>
      <Footer/>
    </div>
  );
}

export default App;
