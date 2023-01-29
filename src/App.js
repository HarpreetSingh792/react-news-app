import React, { Component } from 'react';
import Container from './components/Container.js';
import Navbar from './components/Navbar.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Container key="general" country="in" category="general" />} />
            <Route exact path="/entertainment" element={<Container key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/health" element={<Container key="health" country="in" category="health" />} />
            <Route exact path="/business" element={<Container key="business" country="in" category="business" />} />
            <Route exact path="/science" element={<Container key="science" country="in" category="science" />} />
            <Route exact path="/technology" element={<Container key="technology" country="in" category="technology" />} />
            <Route exact path="/sports" element={<Container key="sports" country="in" category="sports" />} />
          </Routes>
        </Router>

      </>
    )
  }
}

export default App
