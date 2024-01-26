import { useState } from "react";
import { toast } from "react-toastify";
// import SignUp from "./SignUp";
import {Link } from "react-router-dom";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:3000/user/" + userId)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              sessionStorage.setItem("username", userId);
              sessionStorage.setItem("userrole", resp.role)
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };


  const validate = () => {
    let result = true;
    if (userId === "" || userId === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  return (
    <div>
      <div className="container offset-lg-3 col-lg-6 mt-2">
        <div className="card">
          <div className="card-header text-center">
            <h2>Welcome to Conference Scheduler</h2>
          </div>
        </div>
      </div>
      <div className="offset-lg-3 col-lg-6 mt-2">
        <div className="container">
          <form action="" onSubmit={handleLogin}>
            <div className="card ">
              <div className="card-header">
                <h1>User Login</h1>
              </div>
              <div className="card-body">
                <div className="form-row ">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Ex: Abc123 Or Xyz789"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Ex: Abc45698@"
                      autoComplete="on"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login In
                </button>
                <Link  to="/signup" className="btn btn-success ml-3">
                  New User
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
