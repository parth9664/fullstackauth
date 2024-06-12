import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure you have imported BrowserRouter as Router
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Forgotpassword from './components/Forgotpassword';
import Restpassword from './components/Restpassword';
import Generatepassword from './components/generatepassword';


function App() {
  return (
    
      <>
        <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/generatepassword/:token" element={<Generatepassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword/:tokenId" element={<Restpassword />} />
        </Routes>
      </>
   
  );
}

export default App;
