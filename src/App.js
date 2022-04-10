import './styles/App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Reports from './pages/reports';
import Login from './pages';
import Appointments from './pages/appointments';
import Clients from './pages/clients';
import './styles/default.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/appointments' element={<Appointments/>}/>
          <Route path='/clients' element={<Clients/>}/>
        </Routes>
      </Router>
    );
  }
}
export default App;
