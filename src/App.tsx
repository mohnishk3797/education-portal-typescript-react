import React, { ReactElement, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { authRoutes, routes } from './routes';
import { Header } from './components/molecules';
import { store, persistor } from './redux/store';

interface Props {
  token: string | null | undefined;
}

function RenderRoutes({ token }: Props): ReactElement {
  if (token) {
    return (
      <Router>
        <Header>
          {routes.map((x) => (
            <Route
              key={x.key}
              path={x.path}
              exact={x.exact}
              component={x.component}
            />
          ))}
        </Header>
      </Router>
    );
  }
  return (
    <Router>
      {authRoutes.map((x) => (
        <Route
          key={x.key}
          path={x.path}
          exact={x.exact}
          component={x.component}
        />
      ))}
    </Router>
  );
}

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = async () => {
      const tokenData = await localStorage.getItem('token');
      if (tokenData) setToken(tokenData);
      else setToken(null);
    };
    getToken();
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RenderRoutes token={token} />
      </PersistGate>
    </Provider>
  );
}

export default App;
