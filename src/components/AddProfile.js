import React, { useState } from "react";

import ProfileService from "../service/ProfileService.js";

const AddProfile = props => {
    const [email, setEmail] = useState('');
    const [address, seteAddress] = useState('');
    const [pname, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handleAddressChange = event => {
        seteAddress(event.target.value);
    };

    const handlePhoneChange = event => {
        setPhone(event.target.value);
    };
    const addProfile = () => {
        var data = {
            name: pname,
            address: address,
            email: email,
            phone: phone
        };

        if (!data.name) {
            return;
        }

        ProfileService.create(data)
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
                    name="profile_n"
                    value={pname}
                    className="form-control"
                    onChange={handleNameChange}
                    placeholder="Name" />
            </div>
            <div className="col-md-3">
                <input type="text"
                    name="email"
                    value={email}
                    className="form-control"
                    onChange={handleEmailChange}
                    placeholder="email" />
            </div>
            <div className="col-md-3">
                <input type="text"
                    name="address"
                    value={address}
                    className="form-control"
                    onChange={handleAddressChange}
                    placeholder="Address" />
            </div>
            <div className="col-md-3">
                <input type="text"
                    name="phone"
                    value={phone}
                    className="form-control"
                    onChange={handlePhoneChange}
                    placeholder="Phone" />
            </div>
            <div className="col-md-3 mt-3">
                <button onClick={addProfile} className="btn btn-info">Create</button>
            </div>
        </div>
    );
}
export default AddProfile;