import React from 'react';

function CalculationSummary(props) {
    const state = props.state;
    const numPayments = state.numPayments;
    const mortgagePayment = Number(state.payment).toFixed(2);
    const term = state.term;
    const frequency = state.frequency;
    const principal = Number(state.principal).toFixed(2);
    const totalCost = (mortgagePayment * numPayments).toFixed(2);
    const interest = (totalCost - principal).toFixed(2);

    const termPayments = term * frequency
    const termPrincipalPayment = (principal * (termPayments / numPayments)).toFixed(2);
    const termCost = (mortgagePayment * termPayments).toFixed(2);
    const termInterestPayment = (interest * (termPayments / numPayments)).toFixed(2);

    return (
        <section className="CalculationSummary">
            <h1>Calculation Summary</h1>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Term</th>
                        <th>Amortization Period</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Number of payments</td>
                        <td>{termPayments}</td>
                        <td>{numPayments}</td>
                    </tr>
                    <tr>
                        <td>Mortgage Payment</td>
                        <td>{mortgagePayment}</td>
                        <td>{mortgagePayment}</td>
                    </tr>
                    <tr>
                        <td>Principal Payments</td>
                        <td>{termPrincipalPayment}</td>
                        <td>{principal}</td>
                    </tr>
                    <tr>
                        <td>Interest Payments</td>
                        <td>{termInterestPayment}</td>
                        <td>{interest}</td>
                    </tr>
                    <tr>
                        <td>Total Cost</td>
                        <td>{termCost}</td>
                        <td>{totalCost}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default CalculationSummary;