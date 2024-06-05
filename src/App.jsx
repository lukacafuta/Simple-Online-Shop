import { useEffect, useState } from "react";
import "./App.css";
import { apiUser } from "./common/api";
import Router from "./router";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  // const validAccessToken = useSelector((state) => state.user.validAccessToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localToken = localStorage.getItem("accessToken");
    if (localToken) {
      apiUser
        .post("/auth/token/verify/", { token: localToken })
        .then(() => dispatch(login(localToken)))
        .catch(() => {
          localStorage.removeItem("accessToken");
          dispatch(logout());
        })
        .finally(() => setLoading(false));
    } else {
      dispatch(logout());
      setLoading(false);
    }
  }, [dispatch]);

  if (loading) {
    return <>Loading...</>;
  } else {
    return <Router />;
  }
}

export default App;
