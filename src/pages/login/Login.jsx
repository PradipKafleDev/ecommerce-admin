import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = e => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="passowrod"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
