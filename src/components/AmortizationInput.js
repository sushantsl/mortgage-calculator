import React from 'react';

function AmortizationInput({ handleChange, state }) {
    const amortizationYearsOptions = [];
    for (let i = 1; i <= 30; i++) {
        amortizationYearsOptions.push(<option key={i} value={i}>{i === 1 ? `${i} Year` : `${i} Years`}</option>);
    }

    const amortizationMonthsOptions = [];
    for (let j = 0; j <= 11; j++) {
        if (j === 0) {
            amortizationMonthsOptions.push(<option key={j} value={j}></option>);
            continue;
        }
        amortizationMonthsOptions.push(<option key={j} value={j}>{j === 1 ? `${j} Month` : `${j} Months`}</option>);
    }
    return (
        <div className="AmortizationInput">
            <label htmlFor="amortizationYears"> Amortization Period:</label>
            <select id="amortizationYears" value={state.amortizationYears} onChange={handleChange}>
                {amortizationYearsOptions}
            </select>
            <select id="amortizationMonths" value={state.amortizationMonths} onChange={handleChange}>
                {amortizationMonthsOptions}
            </select>
        </div>
    );
}

export default AmortizationInput;
