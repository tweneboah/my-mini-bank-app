import React, { Component } from 'react'
import { connect } from 'react-redux';
import withdrawalAction from '../../actions/withdrawalAction'
import moment from 'moment';
import uuid from 'uuid'


class WithdrawalForm extends Component {

    state = { 
      id: '',
      date: '',
      time: '',
      amountWithdrawing: ''  
     }
     //DATE Generator
     dateGenerator = ()=> {
      return this.setState({
        date: moment().format("MMM Do YY")
      })  
  }
  

//TIME GENERATOR
  timeGenerator = () => {
    return this.setState({
      time: moment().format('LT')
    })
  }

  //ID GENERATOR
  idGenerator = () => {
   return this.setState({
      id: uuid()
    })
  }

  // onAmountWithdrawingChangeHandler HANDLERS
  onAmountWithdrawingChangeHandler = (event) => {
    this.setState({amountWithdrawing: event.target.value})
    this.dateGenerator();
    this.timeGenerator();
    this.idGenerator()
}
   // onNameChangeHandler HANDLERS
  onNameChangeHandler = (event) => {
    this.setState({name: event.target.value})
}

//On form submit
handleSubmitform = (e) => {
  e.preventDefault()
}



    render() { 
           return (
    <div>
        <div  className="form-group row m-5 shadow">
          <input 
           className="form-control" 
           autoComplete="off" 
           type='text' 
            
            placeholder='Enter your name'
            value={this.state.name} 
            onChange={this.onNameChangeHandler}
            />
        </div>

        <div className="form-group row m-5 shadow">
           <input  
           className="form-control"
           type='numner' 
            
            placeholder='Enter Amount'
            value={this.state.amountWithdrawing} 
            onChange={this.onAmountWithdrawingChangeHandler}
            />
        </div>

         <button onClick={()=>this.props.withdrawalAction(this.state.id, this.state.name, this.state.amountWithdrawing, this.state.date, this.state.time)} className='btn  btn-lg btn-danger shadow'>Withdraw</button>
         </div>

    );
    }
}
export default connect(null, {withdrawalAction}) (WithdrawalForm);


