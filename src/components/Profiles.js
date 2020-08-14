import React, { useState, useEffect } from "react";
import ProfileService from "../service/ProfileService.js";
import { Link } from "react-router-dom";

const ListProfiles = () => {
    const [profiles, setProfiles] = useState([]);

    const retrieveProfiles = () => {
        ProfileService.getAll()
            .then(response => {
                setProfiles(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        retrieveProfiles();
    }, []);

    return (
        <div className="row">
            <div className="col-md-12">
                {profiles && profiles.map((profile, index) => (
                    <div className="row" key={profile.id}>
                        <div className="col-md-4">
                            <Link to={`/profile/${profile.id}`}>{profile.name}</Link>
                        </div>
                        <div className="col-md-4">
                            {profile.totalpoints}
                        </div>
                    </div>
                ))}
            </div>
         </div>
    );
}

export default ListProfiles;