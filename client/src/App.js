import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/appts/Home';
import NoMatch from './components/shared/NoMatch'
import Navbar from './components/shared/Navbar'
const App = () => (

    <>
    <Navbar />
    <Switch>
        
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
    </Switch>
    </>
)


export default App