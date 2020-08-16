import React from 'react';
import Profiles from '../components/Profiles.js';
import Card from 'react-bootstrap/Card'

class AllProfiles extends React.Component {
   render() {

      return (
         <div id="container">
            <div className="row">
               <div className="col-lg-6">
                  <Card>
                     <Card.Body>
                        <Card.Title>Profiles</Card.Title>
                        <Card.Text>
                           <Profiles />
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
export default AllProfiles;