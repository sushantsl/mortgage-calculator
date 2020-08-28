import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import MortgageCalculator from './MortgageCalculator';
import CalculationSummary from './components/CalculationSummary';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MortgageCalculator />, div);
});

test('renders Calculate Button', () => {
  const { getByText } = render(<MortgageCalculator />);
  const CalculateButton = getByText(/Calculate/i);
  expect(CalculateButton).toBeInTheDocument();
});

test('does not render Calculation Summary by Default', () => {
  const { queryByText } = render(<MortgageCalculator />);
  const CalculationSummaryElement = queryByText(/Calculation Summary/i);
  expect(CalculationSummaryElement).toBeNull();
});

