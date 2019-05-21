import React, { Component } from 'react';
import { connect } from 'react-redux'


class WithdrawalListTable extends Component {
  
    render() { 
        return ( 
    
    <div className='container'>
        <h2>Transactions History</h2>
        <hr/>
         <table className="table table-hover">
            <thead>
                <tr>
                <th  className="Header-text text-center"scope="col">Name</th>
                <th  className="Header-text text-center"scope="col">Withdrawed</th>
                <th  className="Header-text text-center"scope="col">Deposited</th>
                <th className="Header-text text-center" scope="col">Date</th>
                <th className="Header-text text-center" scope="col">Time</th>
                </tr>
            </thead>
            <tbody>
                {this.props.customers.map((customer) => {
                                return (
                                    <tr className='shadow'>
                                    <td>{customer.name}</td>
                                    <td>{customer.amounWithdrawing}</td>
                                    <td>{customer.amountDeposited}</td>
                                    <td>{customer.date}</td>
                                    <td>{customer.time}</td>
                                    </tr>
                                )
                            })}
           </tbody>
        </table>
     </div>
         );
    }
}


const mapStateToProps = (state) => {
    return {
        customers: state.account.customers
        
    }
} 

export default connect(mapStateToProps, null) (WithdrawalListTable);