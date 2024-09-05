import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Header/Home.jsx'
import Login from './Loginpage/Login.jsx';
import CreateAccount from './Loginpage/CreateAccount.jsx';
import Error from './Error.jsx';
import Profile from './Dashboard/Profile.jsx';
import Navside from './Dashboard/Navside.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import JobList from './Jobs/JobList.jsx';


function App() {
 


  return (
    <>

      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/loginpage' element={<Login />} />
            <Route path='/sign' element={<CreateAccount />} />
            <Route path='*' element={<Error />}/>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/nav' element={<Navside/>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/jobs' element={<JobList />} />
            
            
            

          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
