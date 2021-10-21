import { Provider } from 'react-redux';
import store from './store/state';

import RouterView from './router';
import './style/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <RouterView />
    </Provider>
  );
}

export default App;
