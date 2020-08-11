import React, { useState, useEffect } from "react";
import ChallengeService from "../service/ChallengeService.js";

const AddChallenge = props => {
    const initialChallengeState = {
        id: null,
        name: "",
        start: "",
        end: ""
    };

    const [currentChallenge, setCurrentChallenge] = useState(initialChallengeState);

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const addChallenge = () => {
        var startDate = new Date();
        var start = formatDate(startDate);
        var end = formatDate(new Date(startDate.setMonth(startDate.getMonth() + 1)));

        var data = {
            name: initialChallengeState.name,
            start: start,
            end: end
        };

        ChallengeService.createChallenge(data)
            .then(response => {
                window.location.reload(false);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const handleInputChange = event => {
        initialChallengeState.name = event.target.value;
    };

    return (
        <div>
            <div className="row">
                <div className="col-md5">
                    <input type="text" name="challenge_n" onChange={handleInputChange} placeholder="Enter Challenge name to quickadd" />
                </div>
                <div className="col-md5">
                    <button onClick={addChallenge} className="btn btn-info">New Challenge</button>
                </div>
            </div>
        </div>
    );
}
export default AddChallenge;