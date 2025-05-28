import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Desktop from './Desktop';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Virus from './pages/Virus';
import { GlobalStyle } from './style/GlobalStyle';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Desktop />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/virus" element={<Virus />} />
        </Routes>
      </>
    );
  }
}

export default App;