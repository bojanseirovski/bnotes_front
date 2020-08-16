import React from 'react';
import Profile from '../components/Profile.js';
import Card from 'react-bootstrap/Card'

class OneProfile extends React.Component {

   render() {
      const { params } = this.props.match;
      return (
         <div id="container">
            <div className="row">
               <div className="col-lg-6">
                  <Card>
                     <Card.Body>
                        <Card.Title>Profile</Card.Title>
                        <Card.Text>
                        <Profile props={params} />
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </div>
               <div className="col-lg-6">
                  <Card>
                     <Card.Body>
                        <Card.Title>Options</Card.Title>
                        <Card.Text>

                        </Card.Text>
                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
      );
   }
}
export default OneProfile;