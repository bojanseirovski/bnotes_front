import React from 'react';
import Challenges from '../components/AllChallenges.js';
import AddChallenge from '../components/AddChallenge.js';


class AllChallenges extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         newChallengeName: ''
      }
   }

   addChallenge = () => {
      console.log(this.state.newChallenge);
   }

   render() {
      return (
         <div id="container">
            <h2>Challenge</h2>
            <div>
               {<Challenges />}
               {<AddChallenge/>}
            </div>
         </div>
      );
   }
}
export default AllChallenges;