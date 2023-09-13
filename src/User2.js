import React, { useState } from "react";
import './App.css'
const User2 = () => {
  const [formData, setFormData] = useState({
    Password: "",
    ConfirmPassword: "",
  });
     function Changehandler(e) {
       setFormData({ ...formData, [e.target.name]: [e.target.value] });
     }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={Changehandler}
        />
      </div>
      <div>
        <label htmlFor="confirm password">confirm Password</label>
        <input
          type="password"
          name="confirm password"
          placeholder="confirm Password"
          onChange={Changehandler}
        />
      </div>
      <br />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "green",
          color: "white",
          width: "100px",
          height: "40px",
          marginRight: "300px",
        }}
      >
        Create account
      </button>
      <p style={{ marginRight: "200px" }}>Already have an online account ?</p>
      <p style={{ color: "green", marginRight: "370px" }}>Sign in</p>
    </>
  );
};

export default User2;
