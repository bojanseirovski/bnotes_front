import React from 'react';
import Challenges from '../components/AllChallenges.js';
import AddChallenge from '../components/AddChallenge.js';
import Card from 'react-bootstrap/Card'

class AllChallenges extends React.Component {

   render() {
      return (
         <div id="container">
            <div className="row">
               <div className="col-lg-6">
                  <Card>
                     <Card.Body>
                        <Card.Title>Challenges</Card.Title>
                        <Card.Text>
                           <Challenges />
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
export default AllChallenges;