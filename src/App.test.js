// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RestifyCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RestifyCore/i);
    expect(titleElement).toBeInTheDocument();
});
