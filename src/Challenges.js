import React from 'react';
import './App.css';
import Multiplier from './Multiplier';
import EvenClicks from './EvenClicks';
import CountBy from './CountBy';
import HideMe from './HideMe';
import MinimumLength from './MinimumLength';

const App = () => (
        <>
            <Multiplier x={ 5 } y={ 7 } />
            <EvenClicks/>
            <CountBy step={ 5 }/>
            <HideMe>Blah blah blah</HideMe>
            <MinimumLength length={ 30 }/>
        </>
)

export default App;