import React from 'react';
import Challenges from '../components/AllChallenges.js';

class ChallengeWidget extends React.Component {
   render() {

      return (
         <div className="col-md-4" id="challengew">
            <h2>Challenges</h2>
            <div>
            {<Challenges/>}
            </div>
         </div>
      );
   }
}
export default ChallengeWidget;