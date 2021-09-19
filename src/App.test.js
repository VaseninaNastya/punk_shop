import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReduser from './reducers';
test('renders learn react link', () => {
  const store = createStore(rootReduser);
  render(  
  <Provider store={store}>
    <App />
  </Provider>);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
