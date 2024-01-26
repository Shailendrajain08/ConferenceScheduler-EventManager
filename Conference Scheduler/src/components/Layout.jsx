
import {Outlet} from 'react-router-dom';
import Header from "./Functional Components/Header"

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}