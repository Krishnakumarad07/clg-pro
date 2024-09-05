// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [Form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({
//       ...Form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:8081/auth/login", Form)
//       .then((res) => {
//         console.log(res.data);
//         // Save the token in local storage or state
//         localStorage.setItem("token", res.data.token);
//         // Redirect user or show success message
//         navigate("/");
//       })
//       .catch((error) => {
//         alert("Check that the username or password is correct.");
//         console.error("Login error:", error);
//       });
//   };

//   return (
//     <>
//       <div className="body">
//         <div className="login-wrapper">
//           <div className="login-container">
//             <div className="login-form">
//               <h3>Login</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <input id='in'
//                     type="email"
//                     name="email"
//                     placeholder="Email@example.com"
//                     value={Form.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <input id='in'
//                     type="password"
//                     name="password"
//                     placeholder="@#$KUadeg"
//                     value={Form.password}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <p id='forget'>Forgot Password?</p>
//                 <button id='btn-login' type="submit">Login</button>
//               </form>
//               <p>
//                 Don't have an account? <a href=""><Link to="/sign">Create Account</Link></a>
//               </p>
//             </div>


//             <div className="login-image">
//               <img src="backdrop.png" alt="Login Illustration" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8081/auth/login", Form)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        alert("Check that the username or password is correct.");
        console.error("Login error:", error);
      });
  };

  const handleForgotPasswordClick = () => {
    setShowPopup(true);
  };

  const handleForgotPasswordSubmit = () => {
    axios
      .post("http://localhost:8081/auth/forgot-password", { email: forgotEmail })
      .then((res) => {
        alert("Email is correct. Please check your inbox.");
        setShowPopup(false);
      })
      .catch((error) => {
        alert("The email address you entered is not correct.");
        console.error("Forgot Password error:", error);
      });
  };

  return (
    <>
      <div className="body">
        <div className="login-wrapper">
          <div className="login-container">
            <div className="login-form">
              <h3>Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id='in'
                    type="email"
                    name="email"
                    placeholder="Email@example.com"
                    value={Form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input id='in'
                    type="password"
                    name="password"
                    placeholder="@#$KUadeg"
                    value={Form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <p id='forget' onClick={handleForgotPasswordClick}>Forgot Password?</p>
                <button id='btn-login' type="submit">Login</button>
              </form>
              <p>
                Don't have an account? <a href=""><Link to="/sign">Create Account</Link></a>
              </p>
            </div>

            <div className="login-image">
              <img src="backdrop.png" alt="Login Illustration" />
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Forgot Password</h3>
            <input
              type="email"
              placeholder="Enter your email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              required
            />
            <button onClick={handleForgotPasswordSubmit}>Submit</button>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
