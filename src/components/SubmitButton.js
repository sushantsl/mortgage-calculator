import React from 'react';

function SubmitButton({ handleSubmit }) {
    return (
        <div className="SubmitButton">
            <input type="submit" value="Calculate" onSubmit={handleSubmit}></input>
        </div>
    );
}

export default SubmitButton;