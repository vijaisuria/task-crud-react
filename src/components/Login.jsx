import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/v1/user/login", {
          username: username,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (!res.data.status) {
              alert(res.data.message);
            } else {
              alert(res.data.message);
              navigate("/home");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Login</h2>
          <hr />
        </div>

        <div className="row">
          <div className="col-sm-6">
            <form>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Fee"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={login}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

