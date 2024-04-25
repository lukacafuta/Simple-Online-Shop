import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/slices/userSlice";

export default function Header() {
  const isLoggedIn = useSelector((state) => state.user.validAccessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("accessToken"); // remove the token after logout, otherwise someone else can log in with the saved token
    navigate("/login");
  };

  const menuItems = [
    {
      title: "Home",
      path: "/",
      isDisplayed: true,
    },
    {
      title: "Login",
      path: "/login",
      isDisplayed: !isLoggedIn,
    },
    {
      title: "Logout",
      action: handleLogout,
      isDisplayed: isLoggedIn,
    },
    {
      title: "Profile",
      path: "/profile",
      isDisplayed: isLoggedIn,
    },
  ];

  return (
    <header>
      {menuItems
        .filter((i) => i.isDisplayed)
        .map((i) => {
          if (i.action) {
            return <a onClick={i.action} key={i.title}>{i.title}</a>;
          } else {
            return (
              <NavLink to={i.path} key={i.title}>
                {i.title}
              </NavLink>
            );
          }
        })}
    </header>
  );
}
