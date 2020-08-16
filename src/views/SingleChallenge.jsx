import React from 'react';
import Challenge from '../components/Challenge.js';
import AddChallenge from '../components/AddChallenge.js';
import Card from 'react-bootstrap/Card'

class SingleChallenge extends React.Component {
   render() {
      const { params } = this.props.match;
      return (
         <div id="container">
            <div className="row">
               <div className="col-lg-6">
                  <Card>
                     <Card.Body>
                        <Card.Title>Challenge</Card.Title>
                        <Card.Text>
                           <Challenge props={params}/>
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </div>
               <div className="col-lg-6">
                  <Card>
                     <Card.Body>
                        <Card.Title>New Challenge</Card.Title>
                        <Card.Text>
                           <AddChallenge />
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
      );
   }
}
export default SingleChallenge;