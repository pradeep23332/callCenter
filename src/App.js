import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import CallAgents from './components/pages/CallAgents';
import Hotlines from './components/pages/Hotlines';
import Statistics from './components/pages/Statistics';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import CallLog from './components/pages/CallLog';
import Sms from './components/pages/Sms';
import AgentStatusLog from './components/pages/AgentStatusLog';
import LogOut from './components/pages/LogOut';
import Allhotline from './components/pages/Allhotline';
import Receivedm from './components/pages/Receivedm';
import Sentm from './components/pages/Sentm';
import Hotsetting from'./components/pages/Hotsetting';
import Sendmes from './components/pages/Sendmes';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/callagents' component={CallAgents} />
        <Route path='/hotlines' component={Hotlines} />
        <Route path='/services' component={Services} />
        <Route path='/statistics' component={Statistics} />
        <Route path='/logout' component={LogOut} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/calllog' component={CallLog} />
        <Route path='/sms' component={Sms} />
        <Route path='/agentstatuslog' component={AgentStatusLog} />
        <Route path='/allhotline' component={Allhotline} />
        <Route path='/receivedm' component={Receivedm}/>
        <Route path='/sentm' component={Sentm}/>
        <Route path='/hotsetting' component={Hotsetting}/>
        <Route path='/sendmes' component={Sendmes}/>
      </Switch>

    
    </Router>
    
  );
}

export default App;
