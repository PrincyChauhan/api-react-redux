import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./store/user-action";

function App(props) {
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getUserData());
  };

  const users = useSelector((state) => state.user.users);
  console.log(users);
  return (
    <div>
      <button onClick={fetchData}>Fetch Users</button>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
