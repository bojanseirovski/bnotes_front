import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';

class ChartsWidget extends React.Component {
   render() {

      return (
         <div className="col-md-4">
            <Card >
               <Card.Body>
                  <Card.Title>Statistics</Card.Title>
                  <Col lg="12">

                  </Col>
               </Card.Body>
            </Card>
         </div>
      );
   }
}
export default ChartsWidget;