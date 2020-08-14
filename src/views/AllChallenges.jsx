import React from 'react';
import Challenges from '../components/AllChallenges.js';
import AddChallenge from '../components/AddChallenge.js';


class AllChallenges extends React.Component {

   render() {
      return (
         <div id="container">
            <h2>Challenges</h2>
            <div className="row">
               <div className="col-md-6">{<Challenges />}</div>
               <div className="col-md-6">{<AddChallenge/>}</div>
            </div>
         </div>
      );
   }
}
export default AllChallenges;