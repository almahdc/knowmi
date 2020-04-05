import React from 'react';

// HOC
import Layout from './hoc/Layout'

// Router
import { Route, Switch } from 'react-router-dom'

// Containers
import Home from './containers/Home'
import Auth from './containers/Auth'

// The component
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Layout>
  );
}

export default App;
