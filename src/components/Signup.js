import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../features/authentication/authenticationSlice";

const Signup = () => {

   const [credentials, setCredentials] = useState({email : '', password : ''});

  const { isAuthenticated, user, loading, error } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(LOGIN_REQUEST());

    const{email,password} = credentials;

    const validEmail = 'user@example.com';
    const validPassword = 'password';

    if(email === validEmail && password === validPassword){
        const user = {email:validEmail};
        dispatch(LOGIN_SUCCESS(user));
        console.log(user);
    }
    else{
        dispatch(LOGIN_FAILURE('invalid'));
    }

  };

  const handleLogout = () => {
    dispatch(LOGOUT());
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Hello user</h1>
          <button handleLogout={handleLogout}>LOGOUT</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <input
           type="email"
           value={credentials.email}
           onChange={(e) => setCredentials({...credentials,email:e.target.value})}
            />
          <input 
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password:e.target.value})}
          />

          <button type="submit" disabled={loading}>
          {loading ? "logging in.." : "login"}
          </button>
          {error && error !== '' && <p>{error}</p>}

        </form>
      )}
    </div>
  );
};

export default Signup;
