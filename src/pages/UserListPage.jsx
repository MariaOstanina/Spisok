import "../styles.css";
import { useEffect, useState } from "react";
import { User } from "../components/User";

export const UserListPage = ({ onUserClick }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);

  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <h1>Список пользователей</h1>
      <input
        type="text"
        placeholder="поиск"
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      {users
        .filter((data) => data.login.toLowerCase().includes(searchText))
        .map((user) => (
          <User
            onClick={() => onUserClick(user.login)}
            key={user.id}
            data={user}
          />
        ))}
    </div>
  );
};
