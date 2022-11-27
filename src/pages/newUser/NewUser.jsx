import React from "react";
import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="pradip" />
        </div>
        <div className="newUserItem">
          <label>Fullname</label>
          <input type="text" placeholder="pradip Kafle" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="pradip@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Harrison,Canberra" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Harrison,Canberra" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              placeholder="Harrison,Canberra"
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              placeholder="Harrison,Canberra"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
