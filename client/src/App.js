import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import TransactionsHistoryTable from './components/TransactionsHistoryTable'
import Dashboard from './components/Dashboard';
import FormsHolder from './components/forms/FormsHolder';
import Navbar from './components/Navbar'
import Landing from './components/Landing'



class App extends React.Component {
  
  render() { 
    return ( 
      <div>
        <BrowserRouter>
        {/* Always visible */}
        <Navbar/>
          <div>
              <Route exact path ='/myaccount' component ={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
     );
  }
}
 
export default App;