import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './components/routing/router/MainRouter';
import Store from './components/contexts/Store';

function App() {
  return (
      <>
          <Store>
              <BrowserRouter>
                  <MainRouter />
              </BrowserRouter>
          </Store>
      </>
  );
}

export default App;
