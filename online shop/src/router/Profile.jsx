import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiUser } from "../common/api";
import { useEffect } from "react";
import { loadUser } from "../store/slices/userSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const validAccessToken = useSelector((state) => state.user.validAccessToken);
  const user = useSelector((state) => state.user.userDetails);

  const fetchUser = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${validAccessToken}`,
        },
      };

      const res = await apiUser.get("/users/me/", config);
      console.log(res);

      dispatch(loadUser(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <>Loading...</>;
  } else {
    return (
      <>
        <h1>Profile page</h1>
        <p>Hi {user.first_name}, welcome to you profile page!</p>
      </>
    );
  }
}
