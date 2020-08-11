import React from 'react';
import '../config.js';

import ChartsWidget from './ChartsWidget.jsx';
import ProfileWidget from './ProfileWidget.jsx';
import ChallengeWidget from './ChallengeWidget.jsx';

export default class HomePage extends React.Component {
   render() {
      return (
         <div id="container">
            <div className="row">
               {<ProfileWidget/>}
               {<ChallengeWidget/>}
               {<ChartsWidget/>}
            </div>
         </div>
      );
   }
}
