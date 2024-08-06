import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  
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
        // Save the token in local storage or state
        localStorage.setItem("token", res.data.token);
        // Redirect user or show success message
        navigate("/"); 
      })
      .catch((error) => {
        alert("check the username or password are correct");
        console.error("Login error:", error);
      });
  };

  return (
    <div className="Login">
      <div className="login-container">
        <img id="logo1" src="/logo3.png" alt="Logo" />
        <h3 id="log">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
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
            <input
              type="password"
              name="password"
              placeholder="@#$KUadeg"
              value={Form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/sign">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// function Login() {
//     const [form, setForm] = useState({
//         email: '',
//         password: '',
//     });
//     const navigate = useNavigate();

// const handleChange = (e) => {
//     setForm({
//         ...form,
//         [e.target.name]: e.target.value,
//     });
// };

// const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post('http://localhost:8081/auth/login', form)
//         .then(response => {
//             console.log(response.data);
//             // Save the token in local storage or state
//             localStorage.setItem('token', response.data.token);
//             // Redirect user or show success message
//             navigate('/dashboard');  // Redirect to a protected route
//         })
//         .catch(error => {
//             console.error('Login error:', error);
//         });
// };

//     return (
//         <div className="Login">
//             <div className="login-container">
//                 <img id="logo1" src="/logo3.png" alt="" />
//                 <h3 id='log'>Login</h3>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Email@example.com"
//                             value={form.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             placeholder="Password"
//                             value={form.password}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button type="submit">Login</button>
//                 </form>
//                 <p>
//                     Don't have an account? <Link to="/sign">CreateAccount</Link>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Login;
