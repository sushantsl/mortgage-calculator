import React from 'react';

function FrequencyInput({ handleChange, state }) {
    return (
        <div className="FrequencyInput">
            <label htmlFor="frequency"> Payment Frequency: </label>
            <select id="frequency" value={state.frequency} onChange={handleChange}>
                <option key="0" value={52}>Weekly</option>
                <option key="1" value={26}>Bi-Weekly</option>
                <option key="2" value={24}>Semi-Monthly</option>
                <option key="3" value={12}>Monthly</option>
            </select>
        </div>
    );
}
export default FrequencyInput;