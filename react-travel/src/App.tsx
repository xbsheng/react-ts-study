import React from 'react'
import { Detail, Home, Login, Register, _404 } from '@/pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/detail/:id" component={Detail} />
        <Route component={_404} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
