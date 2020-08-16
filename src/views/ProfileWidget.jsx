import React from 'react';
import Profiles from '../components/Profiles.js';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

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
            <Card>
               <Card.Body>
                  <Card.Title>Profiles</Card.Title>
                  <Col lg="12">
                  <Profiles />
                  </Col>
               </Card.Body>
            </Card>
         </div>
      );
   }
}
export default ProfileWidget;