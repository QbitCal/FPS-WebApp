import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages';
import Reports from './pages/reports';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reports' element={<Reports/>}/>
        </Routes>
      </Router>
    );
  }
}
export default App;
