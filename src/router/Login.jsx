import { useState } from "react";
import { apiUser } from "../common/api";
import { useDispatch } from "react-redux";
import { login, loadUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import {
  ButtonStyled,
  LoginFormStyled,
  MainContainerHeaderStyled,
  MainContainerStyled,
  TopRightSectionStyled,
} from "../StyledComponents/LoginStyled";
import { verifyToken } from "../common/verifyToken";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");

    // TODO: send the username and the password to the API to log in
    try {
      const res = await apiUser.post("/auth/token/", {
        email: email,
        password: password,
      });
      // console.log(res);
      // store token locally
      localStorage.setItem("accessToken", res.data.access);

      const tokenVerified = await verifyToken(dispatch);
      if (tokenVerified) {
        //dispatch access token and user detail to redux store
        dispatch(login(res.data.access));
        dispatch(loadUser(res.data.user));
        // if successful, redirect user to their profile page
        navigate("/profile");
      } else {
        setLoginError("Token verification failed. Please try again.");
      }
    } catch (error) {
      // if unsuccessful, show error
      setLoginError(
        error.response?.data?.detail || "Login was not successfull"
      );
      console.error(error);
    }
  };

  return (
    <MainContainerStyled>
      <TopRightSectionStyled>
        <p>
          Don't have an account?{" "}
          <ButtonStyled onClick={() => navigate("/registration")}>
            Register here
          </ButtonStyled>
        </p>
      </TopRightSectionStyled>
      <MainContainerHeaderStyled>
        <h1>Log In</h1>
      </MainContainerHeaderStyled>
      <LoginFormStyled onSubmit={(e) => handleLoginSubmit(e)}>
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMessage">{loginError}</p>
        <ButtonStyled type="submit">Log In</ButtonStyled>
      </LoginFormStyled>
    </MainContainerStyled>
  );
}
