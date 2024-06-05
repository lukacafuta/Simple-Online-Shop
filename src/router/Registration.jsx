import { useNavigate } from "react-router-dom";
import { apiUser } from "../common/api";
import { useState } from "react";
import {
  MainContainerHeaderStyled,
  MainContainerStyled,
  SignupFormStyled,
} from "../StyledComponents/SignupStyled";

export default function Registration() {
  //state variables to manage from inputs and registration
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleCodeRequest = async (e) => {
    e.preventDefault();
    console.log("log run", e);
    try {
      const res = await apiUser.post("auth/registration/", { email });
      //   console.log(res);
      setCodeSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    // console.log(codeSent);
    console.log(email, userName, code, password);
    e.preventDefault();
    // console.log("log run", e);
    if (password !== passwordRepeat) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await apiUser.patch("/auth/registration/validation/", {
        email: email,
        username: userName,
        code: code,
        password: password,
        password_repeat: passwordRepeat,
        first_name: firstName,
        last_name: lastName,
      });
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContainerStyled>
      <MainContainerHeaderStyled>
        <h1>Sign Up</h1>
      </MainContainerHeaderStyled>
      {!codeSent ? (
        <SignupFormStyled onSubmit={handleCodeRequest}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </SignupFormStyled>
      ) : (
        <SignupFormStyled onSubmit={handleRegisterSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="number"
              placeholder="Validation Code"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password Repeat"
              required
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Register
          </button>
        </SignupFormStyled>
      )}
    </MainContainerStyled>
  );
}
