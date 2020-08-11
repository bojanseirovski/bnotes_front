import React from 'react';
import Profile from '../components/Profile.js';

class OneProfile extends React.Component {
   
   render() {
      const { params } = this.props.match;
      return (
         <div id="container">
            <h2>Profile</h2>
            <div>
                {<Profile props={params}/>}
            </div>
         </div>
      );
   }
}
export default OneProfile;