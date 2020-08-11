import React from 'react';
import Profiles from '../components/Profiles.js';

class AllProfiles extends React.Component {
   render() {

      return (
         <div id="container">
            <h2>Profiles</h2>
            <div>
               {<Profiles/>}
            </div>
         </div>
      );
   }
}
export default AllProfiles;