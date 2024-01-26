import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const [id, setId] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const usenavigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    let regObj = { id, fullname, password, email, address, gender };
    console.log(regObj);
    if (IsValidate()) {
      fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          usenavigate("/")
          toast.success("Signup Successfully", res.message);
        })
        .catch((err) => {
          toast.error(`Something Went Wrong`, `${err.message}`);
        });
    }
  };

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += "Username";
    }
    if (fullname === null || fullname === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }
    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        console.log("0");
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
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
          <form action="" onSubmit={handleSubmit}>
            <div className="card ">
              <div className="card-header">
                <h1>User Sign Up</h1>
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
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      type="text"
                      className="form-control"
                      id="fullname"
                      placeholder="Ex: Ram..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Ex: abc@email.com"
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
                  <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Ex: 104, Street number 4...."
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Gender <span className="errmsg">*</span>
                      </label>
                      <br></br>
                      <input
                        type="radio"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                        name="gender"
                        value="male"
                        className="form-check-input"
                      ></input>
                      <label className="check-label">Male</label>
                      <input
                        type="radio"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                        name="gender"
                        value="female"
                        className="form-check-input"
                      ></input>
                      <label className="check-label">Female</label>
                      <input
                        type="radio"
                        checked={gender === "other"}
                        onChange={(e) => setGender(e.target.value)}
                        name="gender"
                        value="other"
                        className="form-check-input"
                      ></input>
                      <label className="check-label">Other</label>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
                <Link to="/" className="btn btn-danger ml-3">Go To Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
