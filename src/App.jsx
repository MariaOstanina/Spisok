import { UserListPage } from "./pages/UserListPage";
import { useState } from "react";
import { UserPage } from "./pages/UserPage";

export const App = () => {
  const [page, setPage] = useState({ name: "userList", data: {} });
  return (
    <>
      <div className="containerButton">
        <button onClick={() => setPage({ name: "userList", data: {} })}>
          Список пользователей
        </button>
        <button
          onClick={() =>
            setPage({ name: "user", data: { login: "MariaOstanina" } })
          }
        >
          Пользователь
        </button>
      </div>
      {page.name === "userList" ? (
        <UserListPage
          onUserClick={(login) => setPage({ name: "user", data: { login } })}
        />
      ) : (
        <UserPage login={page.data.login} />
      )}
    </>
  );
};
