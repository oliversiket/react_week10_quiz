import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Header from './Header';
import Multiplier from './Multiplier';
import EvenClicks from './EvenClicks';
import CountBy from './CountBy';
import Challenges from './Challenges';
import HideMe from './HideMe';
import MinimumLength from './MinimumLength';
import Posts from './Posts';


const App = () => (
    <Router>
        <>
            <Header></Header>

            <Switch>
              <Route exact path="/challenges" component={ Challenges }/>
              <Route exact path="/even-clicks" component={ EvenClicks }/>
              <Route exact path="/" component={ Posts }/>
              <Route path="/count-by/:step" render={ ({ match }) => (
                <CountBy step={ +match.params.step }/>
              ) } />
              <Route path="/hide-me" render={ () => (
                <HideMe>Blah blah blah</HideMe>
              ) } />
              <Route path="/minimum/:length" render={ ({ match }) => (
                <MinimumLength length={ +match.params.length} />
              ) } />
              <Route path="/multiplier/:x/:y" render={ ({ match }) => (
                <Multiplier x={ match.params.x } y={ match.params.y } />
              ) } />
              
            </Switch> 
        </>
    </Router>
)

export default App;
