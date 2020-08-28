import React from 'react';
import './MortgageCalculator.css';
import InputForm from './components/InputForm';
import CalculationSummary from './components/CalculationSummary';

class MortgageCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: 100000,
      rate: 5,
      frequency: 12,
      amortizationYears: 25,
      amortizationMonths: 0,
      term: 5,
      payment: -1,
      numPayments: -1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let P = this.state.principal; //Principal Amount
    let R = this.state.rate; //Rate per annum
    let r = R / 100 / this.state.frequency; //Rate for the payment frequency

    //Number of payments in the amortization period
    let n = ((parseInt(this.state.amortizationYears) * 12) + parseInt(this.state.amortizationMonths))
      * (this.state.frequency / 12);

    //Value of each mortgage payment
    let mortgagePayment = (P * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)).toFixed(2);

    this.setState({
      payment: mortgagePayment,
      numPayments: n
    });
  }

  render() {
    return (
      <div className="App" >
        <InputForm handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          state={this.state} />
        {this.state.payment >= 0 &&
          <CalculationSummary state={this.state} />
        }
      </div>
    );
  }
}

export default MortgageCalculator;
