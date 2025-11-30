import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand name in header', () => {
  render(<App />);
  const h1 = screen.getByRole('heading', { level: 1 });
  expect(h1).toHaveTextContent(/Orphans Hope/i);
});

test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /^Home$/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^Donate$/i })).toBeInTheDocument();
});

test('donate route shows wallet labels', async () => {
  window.history.pushState({}, '', '/donate');
  render(<App />);
  expect(await screen.findByText(/Support Orphans Hope/i)).toBeInTheDocument();
  expect(screen.getByText(/TRC20 Wallet/i)).toBeInTheDocument();
});
