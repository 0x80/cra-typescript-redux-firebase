import React, { Component } from 'react';
import Login, { LoginPage } from './pages/login';
import ErrorBoundary from './components/error-boundary';

class App extends Component<{}, {}> {
  public render() {
    return (
      <ErrorBoundary>
        <Login />
      </ErrorBoundary>
    );
  }
}

export default App;
