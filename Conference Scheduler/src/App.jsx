import "./App.css";
// import CreateEvent from "./components/Functional Components/CreateEvent";
// import Login from "./components/Auth-Components/Login";
import SignUp from "./components/Auth-Components/SignUp";
import { ToastContainer } from 'react-toastify';
// import Header from "./components/Functional Components/Header";

function App() {
  return (
    <>
      <ToastContainer/>
      {/* <Login /> */}
      <SignUp />
       {/* <Header/> */}
      {/* <CreateEvent/>  */}
    </>
  );
}

export default App;
