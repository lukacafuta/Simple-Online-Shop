import { useEffect } from 'react';
import './App.css'
import { api } from './common/api';
import Router from './router'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './store/slices/userSlice';



function App() {
  
  const dispatch = useDispatch();
  const validAccessToken = useSelector((state) => state.user.validAccessToken);

  useEffect(() => {
    const localToken = localStorage.getItem('accessToken');
    if (localToken) {
      api.post('/auth/token/verify/', {token: localToken})
      .then(() => dispatch(login(localToken)))
      .catch(() => {
        localStorage.removeItem('accessToken')
        dispatch(logout())
      })
    } else {
      dispatch(logout());
    }
  }, []);

  if (validAccessToken === undefined) {
    <>Loading...</>;
  } else {
    return <Router />
  };
};

export default App;
