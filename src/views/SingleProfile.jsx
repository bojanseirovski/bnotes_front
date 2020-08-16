import React from 'react';
import Profile from '../components/Profile.js';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

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
                        <Col lg="12">
                        <Profile props={params} />
                        </Col>
                     </Card.Body>
                  </Card>
               </div>
               <div className="col-lg-6">
                  <Card>
                     <Card.Body>
                        <Card.Title>Options</Card.Title>
                        <Col lg="12">

                        </Col>
                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
      );
   }
}
export default OneProfile;