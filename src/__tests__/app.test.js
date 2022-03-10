import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'

test('matches snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})