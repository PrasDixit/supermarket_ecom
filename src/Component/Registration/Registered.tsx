import { Link } from "react-router-dom";
import axios from "axios";

import { FC, useState } from "react";

const Registered: FC = () => {
  const [last_name, setLastName] = useState<string>("");
  const [first_name, setFirstName] = useState<string>("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState<string>("");
  // const [confirmPassword,setConfirmPassword]= useState<string>("");
  const [mobile_number, setMobileNumber] = useState<number>();

  const postRequestHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      last_name,
      email,
      password,
      mobile_number,
      first_name,
    };
    console.log(data);
    const response = await axios.post(
      "https://uat.ordering-dalle.ekbana.net/api/v4/auth/signup",
      data
    );
    if (response.status === 200 || response.status === 201) {
      alert("Registration successful");
      console.log("Response:", response.data);
      console.log("Response Code:", response.status);
      return true;
    } else {
      console.log("Response:", response.data);
      console.log("Response Code:", response.status);
    }
  };

  return (
    <>
      <div>
        <div className="register">
          <div className="container">
            <h2>Register Here</h2>
            <div className="login-form-grids">
              <h5>profile information</h5>

              <form>
                <input
                  type="text"
                  placeholder="First Name..."
                  required
                  name={first_name}
                  value={first_name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
                />

                <input
                  type="text"
                  placeholder="Last Name..."
                  required
                  name={last_name}
                  value={last_name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                />
                <h6>Login information</h6>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  name={email}
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  required
                  value={mobile_number || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMobileNumber(Number(e.target.value))
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name={password}
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />

                <input
                  type="submit"
                  value="Register"
                  onClick={(e) => postRequestHandler(e)}
                />
              </form>
              {/* }} */}
            </div>
            <div className="register-home">
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registered;
