import React from 'react';
import Profiles from '../components/Profiles.js';


class ProfileWidget extends React.Component {

   constructor() {
      super();
      this.state = {
         profiles: []
      };
   }

   render() {
      return (
         <div className="col-md-4" id="profilew">
            <h2>Profiles</h2>
            <div>
               <Profiles/>
            </div>
         </div>
      );
   }
}
export default ProfileWidget;