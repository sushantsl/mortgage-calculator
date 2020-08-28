import React from 'react';

function InterestInput({ handleChange, state }) {
    return (
        <div className="InterestInput">
            <label htmlFor="rate"> Interest Rate:</label>
            <input id="rate" onChange={handleChange} type="text" value={state.rate} />
        </div>
    )
}

export default InterestInput;