import "../styles.css";
import { useEffect, useState } from "react";
import { User } from "../components/User";
import { Header } from "../components/Header";

export const UserListPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);

  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Header/>
      <div className="App">
      <h1>Список пользователей</h1>
      <input
        type="text"
        placeholder="поиск"
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      {console.log(users)}
      
      {users
        .filter((data) => data.login.toLowerCase().includes(searchText))
        .map((user) => (
          <User
            key={user.id}
            data={user}
          />
        ))}
      </div>
    </>
  );
};
