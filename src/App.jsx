import "./App.css";
import Login from "./components/Auth-Components/Login";
// import SignUp from "./components/Auth-Components/SignUp";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer/>
      <Login />
      {/* <SignUp /> */}
    </>
  );
}

export default App;
