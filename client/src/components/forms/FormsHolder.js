import React, { Component } from 'react';
import DepositForm from './DepositForm';
import Withdrawal from './WithDrawalForm'
import WithDrawalForm from './WithDrawalForm';

class FormsHolder extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='container mb-5 '>
                <div className='row'>
                    <div className='col-md'>
                    <div class="card">
                            <div class="card-body shadow">
                            <DepositForm/>
                               </div>
                            </div>
                    </div>


                    <div className='col-md'>
                    <div class="card">
                            <div class="card-body">
                          
                            <WithDrawalForm/>
                            
                            </div>
                            </div>
                    </div>
           
              

            </div>
          </div>
         );
    }
}
 
export default FormsHolder;