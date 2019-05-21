import React, { Component } from 'react';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 

<nav class="navbar navbar-expand-lg navbar-dark TransactionHistoryTable">
  <a class="navbar-brand" href="#">My-Mini-Bank</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://my-bank-app-api.herokuapp.com/">API</a>
      </li>
    </ul>
  </div>
</nav>
         );
    }
}
 
export default Navbar;