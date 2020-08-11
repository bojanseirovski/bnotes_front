import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'regenerator-runtime/runtime'

import HomePage from './views/HomePage.jsx';
import AllProfiles from './views/AllProfiles.jsx';
import SingleProfile from './views/SingleProfile.jsx';
import Report from './views/Report.jsx';
import SingleChallenge from './views/SingleChallenge.jsx';
import AllChallenges from './views/AllChallenges.jsx';
import Charts from './views/Charts.jsx';

class App extends React.Component {
   render() {
      const year = new Date().getFullYear();
      return (
         <Router>
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a href="/" className="navbar-brand">
                     Leaderboard
                  </a>
                  <div className="navbar-nav mr-auto">
                     <li><Link to={'/'} className="nav-link"> Home </Link></li>
                     <li><Link to={'/profile'} className="nav-link">Profiles</Link></li>
                     <li><Link to={'/challenge'} className="nav-link">Challenges</Link></li>
                  </div>
               </nav>
               <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/profile/:id' component={SingleProfile} />
                  <Route path='/profile' component={AllProfiles} />
                  <Route path='/challenge/:id' component={SingleChallenge} />
                  <Route path='/challenge' component={AllChallenges} />
               </Switch>
               <footer>
                  <div>&copy;{year} Bojan - Leaderboard</div>
               </footer>
            </div>
         </Router>
      );
   }
}
export default App;
