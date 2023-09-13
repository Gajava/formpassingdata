import React, { useState } from 'react';
import './App.css'
import {useNavigate} from 'react-router-dom'
function Form() {
const navigate=useNavigate()
  const [formData, setFormData] = useState({

    firstname: '',
    lastname:'',
    email: '',
    taxid: '',
    password: '',
    confirmPassword:''

  });
  const [errors, setErrors] = useState({});
   function Changehandler(e) {
     setFormData({ ...formData, [e.target.name]: [e.target.value] });
   }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);

  };
  const isValid = () => {

    const newErrors = {};

if (!formData.firstname) {

newErrors.firstname = ' firstName is required';

    }

 if (!formData.lastname) {
   newErrors.lastname = " lastName is required";
 }


if (!formData.email ) {

newErrors.email = 'Email is required';

} else if (!isValidEmail(formData.email)) {

newErrors.email = 'Invalid email address';

}
     if (!/^[0-9]+$/.test(formData.taxid)) {
       newErrors.taxid = "Tax ID must be a 6-digit number";
     }
    if (!formData.password) {
      newErrors.password="password is required"
    }
 if (formData.confirmPassword) {
   newErrors.confirmPassword = "confirmpassword is requied";
 }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      console.log('Form data:', formData);
      navigate('/User1', { state: { formData } });

    }
    else {
     console.error('Form has validation errors:', errors);

    }

  };
  return (
    <>
      <div className="form-group">
        <h1>My Form</h1>
        <form onSubmit={handleSubmit}>
          <div className='label-group'>
            <div>
              <label htmlFor="firstname">firstName</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={Changehandler}
              />
              {errors.firstname && (
                <div className="error">{errors.firstname}</div>
              )}
            </div>

            <div>
              <label htmlFor="lastname">lastName</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={Changehandler}
              />
              {errors.lastname && (
                <div className="error">{errors.lastname}</div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={Changehandler}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="taxid">taxID</label>

            <input
              type="number"
              id="taxid"
              name="taxid"
              value={formData.taxid}
              onChange={Changehandler}
            />
            {errors.taxid && <div className="error">{errors.taxid}</div>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={Changehandler}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div>
            <label htmlFor="ConfirmPassword"> ConfirmPassword</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={Changehandler}
            />
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
          </div>
          <br />

          <button type="submit" style={{backgroundColor:"green",color:"white",marginRight:"300px",width:"100px",height:"40px"}}>Create Account</button>
        </form>
      </div>
    </>
  );

}
export default Form;


