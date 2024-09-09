import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'
import Login from './Components/Loginpage/Login.jsx';
import CreateAccount from './Components/Loginpage/CreateAccount.jsx';
import Error from './Error.jsx';
import Profile from './Components/Dashboard/Profile.jsx';
import Navside from './Components/Dashboard/Navside.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import JobList from './Components/Jobs/JobList.jsx';
import OrgLogin from './Components/Organaization/OrgLogin.jsx';
import Signup from './Components/Organaization/Signup.jsx';
import Setting from './Components/Dashboard/Setting.jsx';
import ApplyJob from './Components/Dashboard/ApplyJob.jsx';
import Status from './Components/Dashboard/Status.jsx';
import OrgNav from './Components/Organaization/OrgNav.jsx';
import OrgDash from './Components/Organaization/OrgDash.jsx';
import OrgHome from './Components/Organaization/Org-home/OrgHome.jsx';


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
            <Route path='/orglogin' element={<OrgLogin />} />
            <Route path='/orgsignup' element={<Signup />} />
            <Route path='/status' element={<Status />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/applyjob' element={<ApplyJob />} />
            <Route path='/orgnav' element={<OrgNav />} />
            <Route path='/orgdash' element={<OrgDash />} />
            <Route path='/orghome' element={<OrgHome />} />
            
            

          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
