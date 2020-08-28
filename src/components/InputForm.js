import React from 'react';
import PrincipalInput from './PrincipalInput';
import InterestInput from './InterestInput';
import AmortizationInput from './AmortizationInput';
import FrequencyInput from './FrequencyInput';
import TermInput from './TermInput';
import SubmitButton from './SubmitButton';

function InputForm({ handleSubmit, handleChange, state }) {
    return (
        <section className="Form">
            <h1>Mortgage Calculator</h1>
            <form onSubmit={handleSubmit}>
                <PrincipalInput handleChange={handleChange} state={state} />
                <InterestInput handleChange={handleChange} state={state} />
                <AmortizationInput handleChange={handleChange} state={state} />
                <FrequencyInput handleChange={handleChange} state={state} />
                <TermInput handleChange={handleChange} state={state} />
                <SubmitButton handleSubmit={handleSubmit} />
            </form>
        </section>
    );
}

export default InputForm;