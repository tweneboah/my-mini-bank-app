import React, { Component } from 'react'
import { connect } from 'react-redux';
import depositAction from '../actions/depositAction'
import moment from 'moment';
import uuid from 'uuid'

class DepositForm extends Component {
    state = { 
      id: '',
      name: '',
      amountDeposited: '',
      date: '',
      time: ''
     
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

  // onAmountChangeHandler HANDLERS
  onAmountChangeHandler = (event) => {
    this.setState({amountDeposited: event.target.value})
    this.dateGenerator();
    this.timeGenerator();
    this.idGenerator()
}

  //onNameChangeHandler HANDLER 
  onNameChangeHandler = (event) => {
    this.setState({name: event.target.value})
}

//SUBMIT FORM
handleSubmitform = (e) => {
  e.preventDefault()
  console.log(this.state.name)
}
    render() { 
           return ( 
 <React.Fragment>
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
                value={this.state.amountDeposited} 
                onChange={this.onAmountChangeHandler}
                  />
            </div>
                <button onClick={()=>this.props.depositAction(this.state.id, this.state.name, this.state.amountDeposited, this.state.date, this.state.time)} className='btn  btn-lg btn-primary '>Deposit</button>

  </React.Fragment>
    );
    }
}
export default connect(null, {depositAction}) (DepositForm);




// class DepositForm extends Component {
//   state = { 
//      name: '',
//      amount: ''
//    }
   

//   render() { 
    

//          return (
// <div className='container'>
// <div className='row'>
//   <div className='col'>

//     <Form >
  
//       <h1>Deposit Form</h1>
//       <div className="form-group row">
//         <Field  className="form-control" autoComplete="off" type='text'  name='name' placeholder='Enter your name'/>
//       </div>

//       <div className="form-group row">
//          <Field  className="form-control"type='numner'  name='amount' placeholder='Enter Amount'/>
//       </div>

//        <button className='btn btn-primary' type=''>Deposit</button>
//     </Form>
//      </div>
//     </div>
// </div>

//   );
//   }
// }

// const mapStateToProps = (state) => {
// return state
// }

// const FormikApp = withFormik({
//  //1. Creating initial values
//  mapPropsToValues({name,amount}){
//    return {
//     name: '',
//     amount: ''
//    }
   
//  },
//  handleSubmit(values){
//     // console.log(values)
   
//  }
// })(DepositForm)

// export default connect(mapStateToProps, null) (FormikApp);