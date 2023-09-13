
// import React, { useState } from 'react';

 

// function App() {

//   const [formData, setFormData] = useState({

//     name: '',

//     email: '',

//   });

 

//   const [errors, setErrors] = useState({});

 

//   const handleInputChange = (e) => {

//     const { name, value } = e.target;

//     setFormData({ ...formData, [name]: value });

//   };

 

//   const isValidEmail = (email) => {

//     // A basic email validation function

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     return emailRegex.test(email);

//   };

 

//   const isValid = () => {

//     const newErrors = {};

 

// if (!formData.name.trim()) {

// newErrors.name = 'Name is required';

//     }

 

// if (!formData.email.trim()) {

// newErrors.email = 'Email is required';

// } else if (!isValidEmail(formData.email)) {

// newErrors.email = 'Invalid email address';

//     }

 

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;

//   };

 

//   const handleSubmit = (e) => {

//     e.preventDefault();

//     if (isValid()) {

//       // Form is valid, you can submit it or perform other actions here

//       console.log('Form data:', formData);

//     } else {

//       // Form is not valid, do not submit, display errors

//       console.error('Form has validation errors:', errors);

//     }

//   };

 

//   return (

//     <><div>

//       <h1>My Form</h1>

//       <form onSubmit={handleSubmit}>

//         <div>

//           <label htmlFor="name">Name:</label>

//           <input

//             type="text"

//             id="name"

//             name="name"

//             value={formData.name}

//             onChange={handleInputChange} />

//           {errors.name && <div className='error'>{errors.name}</div>}

//      </div>      




//     <div>

//         <label htmlFor="email">Email:</label>

//         <input

//           type="email"

//           id="email"

//           name="email"

//           value={formData.email}

//           onChange={handleInputChange} />

//           {errors.email && <div className='error'>{errors.email}</div>}




//         </div>

//         <button type="submit">Submit</button>

//       </form>
//     </div>
//       </>

//   );

// }

 

// export default App;



import React from 'react'
import User1 from './User1';
import { BrowserRouter, Route,Routes} from "react-router-dom";
 import User2 from './User2';
import Form from './Form';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Form} />
        <Route path="/user1" Component={User1} />
       <Route path="/User2" Component={User2}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
