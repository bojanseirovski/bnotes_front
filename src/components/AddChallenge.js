import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import ChallengeService from "../service/ChallengeService.js";

const AddChallenge = props => {

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

    const [sdate, setsDate] = useState(new Date());
    const [edate, seteDate] = useState(new Date());
    const [cname, setName] = useState('');

    const handleChange = (dateName, dateValue) => {

        if (dateName === 'startD') {
            setsDate(dateValue)
        } else if (dateName === 'endD') {
            seteDate(dateValue)
        }
    }

    const handleInputChange = event => {
        setName(event.target.value);
    };

    const addChallenge = () => {
        var data = {
            name: cname,
            start: formatDate(sdate),
            end: formatDate(edate)
        };

        if (!data.name) {
            return;
        }
        ChallengeService.createChallenge(data)
            .then(response => {
                window.location.reload(false);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <input type="text"
                    name="challenge_n"
                    value={cname}
                    className="form-control"
                    onChange={handleInputChange}
                    placeholder="Challenge name" />
            </div>
            <div className="col-md-3">
                <DatePicker
                    name="startD"
                    selected={sdate}
                    onChange={sdate => handleChange('startD', sdate)}
                    className="form-control"
                />
            </div>
            <div className="col-md-3">
                <DatePicker
                    name="endD"
                    selected={edate}
                    onChange={edate => handleChange('endD', edate)}
                    className="form-control"
                />
            </div>
            <div className="col-md-2">
                <button onClick={addChallenge} className="btn btn-info">Create</button>
            </div>
        </div>
    );
}
export default AddChallenge;