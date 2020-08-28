import React from 'react';

function PrincipalInput({ handleChange, state }) {
    return (
        <div className="PrincipalInput">
            <label htmlFor="principal"> Mortgage Amount:</label>
            <input id="principal" onChange={handleChange} type="text" value={state.principal} />
        </div>
    );
}

export default PrincipalInput;