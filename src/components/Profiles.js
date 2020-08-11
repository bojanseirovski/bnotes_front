import React, { useState, useEffect  } from "react";
import ProfileService from "../service/ProfileService.js";
import { Link } from "react-router-dom";

const ListProfiles = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        retrieveProfiles();
    }, []);

    const retrieveProfiles = () => {
        ProfileService.getAll()
            .then(response => {
                setProfiles(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
      return (
      <ul>
          {profiles && profiles.map((profile, index) => (
              <li key={profile.id}><Link to={`/profile/${profile.id}`}>{profile.name}</Link></li>
          ))}
      </ul>
      );
}

export default ListProfiles;