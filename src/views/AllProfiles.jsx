import React from 'react';
import Profiles from '../components/Profiles.js';
import AddProfile from '../components/AddProfile.js';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class AllProfiles extends React.Component {
   render() {

      return (
         <div id="container">
            <div className="row">
               <div className="col-lg-4">
                  <Card>
                     <Card.Body>
                        <Card.Title>Profiles</Card.Title>
                        <Col lg="12">
                           <Profiles />
                        </Col>
                     </Card.Body>
                  </Card>
               </div>
               <div className="col-lg-8">
                  <Card>
                     <Card.Body>
                        <Card.Title>Options</Card.Title>
                        <Col lg="12">
                           <AddProfile />
                        </Col>
                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
      );
   }
}
export default AllProfiles;