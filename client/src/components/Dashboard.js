import React from "react";
import { connect } from 'react-redux';
class Dashboard extends React.Component {
       //displayingTotalDeposit
   displayingTotalDeposit = () => {
    let initialDeposit = 0
    this.props.deposit.depositAccount.forEach((amount) => {
        return initialDeposit += amount
    })

    return initialDeposit
}

//====================
   //Displaying Total Withdrawal
   displayingTotalWithdrawal = () => {
    let initialWithdrawal = 0;
    this.props.Withdrawal.withdrawalAccount.forEach((amount) => {
        return initialWithdrawal += amount
    })
      return initialWithdrawal
}

//TOTAL INCOME
 totalIncome = ()=>{
    return this.displayingTotalDeposit() - this.displayingTotalWithdrawal()
}

    render() { 
        console.log( this.props.deposit.depositAccount)
        return (  
            <div class="jumbotron">
            <div class="row w-100">
                    <div class="col-md">
                        <div  class="card  border-info mx-sm-1 p-3">
                          <div className=''>
                            <div class="card border-info   shadow text-info p-3  " ><span class="fa fa-dollar" aria-hidden="true"></span></div>
                            </div>
                            <div class="text-info text-center mt-3"><h4>Total Deposit</h4></div>
                            <div class="text-info text-center mt-2"><h1>${this.displayingTotalDeposit()}</h1></div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card border-success mx-sm-1 p-3">
                            <div class="card border-success shadow text-success p-3 my-card"><span class="fa fa-dollar" aria-hidden="true"></span></div>
                            <div class="text-success text-center mt-3"><h4>Total Income (Ghs)</h4></div>
                            <div class="text-success text-center mt-2"><h1> $ {this.totalIncome()}</h1></div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card border-danger mx-sm-1 p-3">
                            <div class="card border-danger shadow text-danger p-3 my-card" ><span class="fa fa-dollar" aria-hidden="true"></span></div>
                            <div class="text-danger text-center mt-3"><h4>Total Withdrawal</h4></div>
                            <div class="text-danger text-center mt-2"><h1>$ {this.displayingTotalWithdrawal()}</h1></div>
                        </div>
                    </div>
                
                 </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        deposit: state.account,
        Withdrawal: state.account
    }
}
 
export default connect(mapStateToProps) (Dashboard);