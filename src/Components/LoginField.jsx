import React, { useState } from "react";
import styles from "./style";
import { userLogin } from "./loginAPI";
function LoginField(login) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setBearerToken] = useState("");

  const handleLogin = async () => {
    try {
      const { bearerToken: loginT, refreshToken: refreshT } = await userLogin(
        email,
        password
      );
      const { token: loginToken } = loginT;
      const { token: refreshToken } = refreshT;
      //console.log("refresh token " + refreshToken);
      login.isLoggedIn(loginToken);
      login.refreshToken(refreshToken);
      setBearerToken(loginToken);
    } catch (error) {
      // Handle the error here
    }
  };

  return (
    <div>
      <div className="flex flex-col mb-2 items-center">
        <h2 className="font-poppins text-lg pt-5 pb-5">
          Enter details below to login
        </h2>
        <div className="pb-3">
          <input
            name="email"
            type="email"
            id="email"
            aria-labelledby="login-button"
            className="drop-shadow-lg rounded-full max-w-[200px] px-auto py-1 my-2 pl-2 caret-violet-500 placeholder-gray-400 text-center font-sans border-blue-600 border-2 w-64 bg-gray-700"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            id="password"
            aria-labelledby="login-button"
            className="drop-shadow-lg rounded-full max-w-[200px] px-auto py-1 pl-2 caret-violet-00 placeholder-gray-400 text-center font-sans border-blue-600 border-2 w-64 bg-gray-700"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          id="login-button"
          type="button"
          className={`${styles.searchButtonGradient2} font-poppins border-none my-2 text-drop-shadow-lg`}
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginField;
