import React from 'react';
import './App.css';
import TransactionsHistoryTable from './components/TransactionsHistoryTable'
import Dashboard from './components/Dashboard';
import FormsHolder from './components/FormsHolder';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="text-center">
    <Navbar/>
    <Dashboard/>

    <hr/>

    <FormsHolder/>

        <div className='TransactionHistoryTable m-5 text-white'>
        <TransactionsHistoryTable/>
        </div>

        <div className='Footer-class p-5'>
            <p>We care about you</p>
        </div>
    </div>
  );
}

export default App;
