import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'

afterEach(() => {
  cleanup()
})

test('should render App component', () => {
  render(<App/>)
  const appElement = screen.getByTestId('app-1')
  expect(appElement).toBeInTheDocument()
  expect(appElement).toHaveTextContent('DEL')
  expect(appElement).toContainHTML('</button>')
})

test('matches snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})