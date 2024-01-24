function Login() {

  

  return (
    <div>
      <div className="offset-lg-3 col-lg-6 mt-20">
        <div className="container">
          <div className="card ">
            <div className="card-header">
              <h1>User Login</h1>
            </div>
            <div className="card-body">
              <div className="form-row ">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Ex: Abc123 Or Xyz789"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ex: Abc45698@"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Login In
              </button>
              <button className="btn btn-success ml-3">
                New User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
