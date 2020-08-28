import React from 'react';

function TermInput({ handleChange, state }) {
    const termYearOptions = [];
    for (let k = 1; k <= 10; k++) {
        termYearOptions.push(<option key={k} value={k}>{k === 1 ? `${k} Year` : `${k} Years`}</option>);
    }
    return (
        <div className="TermInput">
            <label> Term:</label>
            <select id="term" value={state.term} onChange={handleChange}>
                {termYearOptions}
            </select>
            <br />
        </div>
    );
}

export default TermInput;