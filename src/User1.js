// import React from "react";
// import { useLocation, useNavigate} from "react-router-dom";
// function User1() {
//   const navigate = useNavigate;
// const location = useLocation();
//   const formData = location.state?.formData || {};
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/User2");
//   };
//   return (
//     <div>
//       <form>
//         <h1>Create your builder account</h1>

//         <div id="leftContainer">
//           <span className="labelid">FirstName </span>
//           <br />
//           <br />
//           <input
//             className="id1"
//             type="text"
//             placeholder="First Name"
//             name="firstname"
//             value={formData.firstname || ""}
//           />
//         </div>
//         <div id="rightContainer">
//           <span className="labelid">Last Name</span>
//           <br />
//           <br />
//           <input
//             type="text"
//             className="id1"
//             placeholder="Last Name"
//             name="lastname"
//             value={formData.lastname || ""}
//           />
//         </div>
//         <div>
//           <label className="labelid2">Email Address</label>

//           <input
//             className="id2"
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={formData.email || ""}
//           />
//         </div>
//         <div>
//           <label className="labelid3">Tax ID</label>
//           <input
//             className="id2"
//             type="number"
//             placeholder="Tax ID"
//             name="taxid"
//             value={formData.taxid || ""}
//           />
//         </div>
//         <button onClick={handleSubmit}>Create Password</button>
//         <p>Already have an online account ?</p>
//         <p>Sign in</p>
//       </form>
//     </div>
//   );
// }
// export default User1;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './App.css';
function User1() {
  const navigate = useNavigate;
  const location = useLocation();
  const formData = location.state?.formData || {};
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/User2");
  };
  return (
    <div>
      <form>
        <h1>Create your builder account</h1>
        <div className="label-group">
          <div>
            <label htmlFor="firstname"> FirstName</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={formData.firstname || ""}
            />
          </div>
          <div>
            <label htmlFor="lastname"> lastName</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={formData.lastname || ""}
            />
          </div>
        </div>
        <div>
          <label htmlFor="Email">Email Address</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email || ""}
          />
        </div>
        <div>
          <label htmlFor="TaxID">TaxID</label>
          <input
            type="number"
            placeholder="Tax ID"
            name="taxid"
            value={formData.taxid || ""}
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
          Create Password
        </button>
        <p style={{ marginRight: "200px" }}>Already have an online account ?</p>
        <p style={{ color: "green", marginRight: "370px" }}>Sign in</p>
      </form>
    </div>
  );
}

export default User1;















