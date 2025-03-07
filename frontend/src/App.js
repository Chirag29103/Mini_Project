import './App.css';
import Home from './MainComponents/Home';
import SignUp from './User/SignUp';
import Login from './User/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './DashBoardComponents/DashBoard';

function App() {
  return (
    <>
      <Router>
        
          <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/login' element={<Login></Login>}/>
          <Route path='/signUp' element={<SignUp></SignUp>}/>
          <Route path='/:userid' element={<DashBoard></DashBoard>}/>
        </Routes>
        
      </Router>
    </>
  );
}

export default App