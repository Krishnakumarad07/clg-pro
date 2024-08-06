import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Header/Home.jsx'
import Login from './Loginpage/Login.jsx';
import CreateAccount from './Loginpage/CreateAccount.jsx';

function App() {


  return (
    <>

      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/loginpage' element={<Login />} />
            <Route path='/sign' element={<CreateAccount />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
