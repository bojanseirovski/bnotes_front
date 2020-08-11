import React from 'react';
import Challenge from '../components/Challenge.js';

class SingleChallenge extends React.Component {
   render() {
      const { params } = this.props.match;
      return (
         <div id="container">
            <h2>Challenge</h2>
            <div>
                {<Challenge props={params}/>}
            </div>
         </div>
      );
   }
}
export default SingleChallenge;