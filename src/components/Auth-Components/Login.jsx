import { useState } from "react";


function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // const usenavigate = useNavigate()

  const handleLogin = (e) => {
    let regObj = { id, password };
    console.log(regObj);
    e.preventDefault();
  }

  const newUser = () => {
 
  }

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
                      value={id}
                      onChange={(e) => setId(e.target.value)}
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
                <button type="submit" className="btn btn-primary">
                  Login In
                </button>
                <button className="btn btn-success ml-3" onClick={newUser}>New User</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
