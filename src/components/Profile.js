import React, { useState, useEffect } from "react";
import ProfileService from "../service/ProfileService.js";

const Profile = props => {
    const initialProfileState = {
        id: null,
        name: "",
        email: "",
        phone: ""
    };
    const initialProfileTotatlPointsState = [];
    const initialProfileChallengeState = [];

    const [currentProfile, setCurrentProfile] = useState(initialProfileState);
    const [currentProfileTotalPoints, setCurrentProfileTotalPoints] = useState(initialProfileTotatlPointsState);
    const [currentProfileChallenges, setCurrentProfileChallenges] = useState(initialProfileChallengeState);

    const getProfile = id => {
        ProfileService.getProfile(id)
            .then(response => {
                setCurrentProfile(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getProfileTotalPoints = id => {
        ProfileService.getPoints(id)
            .then(response => {
                let totalPoints = 0;
                response.data.map((onePoint, index) => (
                    totalPoints = totalPoints + onePoint.point
                ));
                setCurrentProfileTotalPoints(totalPoints);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getProfileChallenges = id => {
        ProfileService.getChallenges(id)
            .then(response => {
                setCurrentProfileChallenges(response.data.TotalChallenges);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const addPoint = id => {
        const uid = id.target.dataset.uid;
        ProfileService.addPoint(uid)
            .catch(e => {
                console.log(e);
            });
        window.location.reload(false);
    }
    useEffect(() => {
        getProfile(props.props.id);
        getProfileTotalPoints(props.props.id);
        getProfileChallenges(props.props.id);
    }, [props.props.id]);

    return (
        <div>
            <div className="row">
                <div className="col-md-3">{currentProfile.name}</div>
                <div className="col-md-3">{currentProfile.email}</div>
                <div className="col-md-4">{currentProfile.address}</div>
            </div>
            <div className="row">
                <div className="col-md-2">Total Points:</div>
                <div className="col-md-4">
                    {currentProfileTotalPoints}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={addPoint} data-uid={currentProfile.id} className="btn btn-info">Add Point</button>
                </div>
                <div className="col-md-2">Total Challenges:</div>
                <div className="col-md-2">{currentProfileChallenges}</div>
            </div>
        </div>
    );
}
export default Profile;