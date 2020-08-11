import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ChallengeService from "../service/ChallengeService.js";
import ProfileService from "../service/ProfileService.js";

const Challenge = props => {
    const initialChallengeState = [];
    const initialChallengeInfoStater = {
        id: null,
        name: "",
        start: "",
        end: ""
    };
    const initialChallengeTotalPoints = [];

    const [currentChallenge, setCurrentChallenge] = useState(initialChallengeState);
    const [currentChallengeInfo, setCurrentChallengeInfo] = useState(initialChallengeInfoStater);
    const [currentChallengeTotalPoints, setCurrentChallengeTotalPoints] = useState(initialChallengeTotalPoints);

    const getChallenge = id => {
        ChallengeService.getChallengeUsers(id)
            .then(response => {
                setCurrentChallenge(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getChallengeInfo = id => {
        ChallengeService.getChallengeByID(id)
            .then(response => {
                let cd = {};
                cd.id = response.data.id;
                cd.start = new Intl.DateTimeFormat('en-CA').format(new Date(response.data.start));
                cd.end = new Intl.DateTimeFormat('en-CA').format(new Date(response.data.end));
                cd.name = response.data.name;
                setCurrentChallengeInfo(cd);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getChallengeTotalPoints = id => {
        ChallengeService.getChallengeTotalPoints(id)
            .then(response => {
                let totalPoints = 0;
                response.data.map((onePoint, index) => (
                    totalPoints = totalPoints + onePoint.point
                ));

                setCurrentChallengeTotalPoints(totalPoints);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const addPoint = id => {
        const uid = id.target.dataset.uid;
        ProfileService.addPoint(uid)
            .catch(e => {
                console.log(e);
            });
        window.location.reload(false);
    }

    useEffect(() => {
        getChallenge(props.props.id);
        getChallengeInfo(props.props.id);
        getChallengeTotalPoints(props.props.id);
    }, [props.props.id]);

    return (
        <div>
            <div className="row">
                <div className="col-md-2">{currentChallengeInfo.name}</div>
                <div className="col-md-2">{currentChallengeInfo.start}</div>
                <div className="col-md-2">{currentChallengeInfo.end}</div>
            </div>
            <div className="row">
                <div className="col-lg-12"> &nbsp;</div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>Users in this challenge</p>
                    <ul>
                        {currentChallenge && currentChallenge.map((oneUser, index) => (
                            <li key={oneUser.id}>
                                <Link to={`/profile/${oneUser.id}`}>{oneUser.name}</Link>
                                <button onClick={addPoint} data-uid={oneUser.id} className="btn btn-info">Add Point</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    <p>Total challenge points</p>
                    <div>
                        {currentChallengeTotalPoints}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Challenge;