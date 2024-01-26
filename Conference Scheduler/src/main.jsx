import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Login from './components/Auth-Components/Login';
import SignUp from './components/Auth-Components/SignUp';
import Layout from './components/Layout';
import Events from './components/Functional Components/Events';
import CreateEvent from './components/Functional Components/CreateEvent'
import YourEvent from './components/Functional Components/YourEvent'
import Cart from './components/Functional Components/Cart'

const root = ReactDOM.createRoot(document.getElementById('root'));

<ToastContainer theme='colored'></ToastContainer>
const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/events" element={<Events/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/createEvent" element={<CreateEvent/>}></Route>
      <Route path="/yourEvent" element={<YourEvent/>}></Route>
      <Route path="/cart/:id" element={<Cart/>}></Route>

    </Route>
)
)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );


