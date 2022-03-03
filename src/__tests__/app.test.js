import { render, screen, cleanup } from '@testing-library/react'
import App from '../App'

test('should render App component', () => {
  render(<App/>)
  const appElement = screen.getByTestId('app-1')
  expect(appElement).toBeInTheDocument()
})