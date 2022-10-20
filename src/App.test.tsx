import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page', () => {
  render(<App />);
  expect(screen.getByRole("textbox")).toHaveDisplayValue("");
  expect(screen.getByRole("button", { name: "Log in" })).toBeEnabled();
});