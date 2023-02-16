import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Pages/Profile';
import PrivateRoute from './Components/PrivateRoute';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<SignIn/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/Profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>


      </Routes>
      
    </Router>
  );
}

export default App;
