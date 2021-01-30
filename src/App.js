import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewCount from './components/auth/NewCount';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/projectState';

function App() {

  return (
    <ProjectState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NewCount} />
          <Route exact path="/proyectos" component={Projects} />
        </Switch>
      </Router>
    </ProjectState>
  );
}

export default App;
