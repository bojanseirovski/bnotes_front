import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ChallengeService from "../service/ChallengeService.js";

const AllChallenges = () => {
    const initialChallengesState = [];
    const [currentChallenges, setCurrentChallenges] = useState(initialChallengesState);

    const getChallenges = () => {
        ChallengeService.getAllChallenges()
            .then(response => {
                setCurrentChallenges(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => { 
        getChallenges();
    },[]);

    return (
        <ul>
          {currentChallenges && currentChallenges.map((currentChallenge, index) => (
              <li key={currentChallenge.id}><Link to={`/challenge/${currentChallenge.id}`}>{currentChallenge.name}</Link></li>
          ))}
      </ul>
    );
}
export default AllChallenges;