import React from 'react';
import Challenges from '../components/AllChallenges.js';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class ChallengeWidget extends React.Component {
   render() {

      return (
         <div className="col-md-4" id="challengew">
            <Card>
               <Card.Body>
                  <Card.Title>Challenges</Card.Title>
                  <Col lg="12">
                  <Challenges/>
                  </Col>
               </Card.Body>
            </Card>
         </div>
      );
   }
}
export default ChallengeWidget;