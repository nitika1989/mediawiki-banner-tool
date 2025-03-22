import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the banner creator heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/MediaWiki Banner Creator/i);
  expect(linkElement).toBeInTheDocument();
});
