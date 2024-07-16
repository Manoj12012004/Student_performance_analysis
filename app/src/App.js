import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from './components/Login';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import AuthComponent from './components/AuthComponent';
import ProtectedRoutes from './components/ProtectedRoutes';
import InputForm from './components/InputForm';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<SignUp/>}></Route>
        {/* <ProtectedRoutes path='/auth' element={<AuthComponent/>}></ProtectedRoutes> */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/auth" element={<AuthComponent />} />
        </Route>
        <Route path='/auth/input_form' element={<InputForm/>}></Route>
      </Routes>      
    </div>
    </Router>
  );
}

export default App;
