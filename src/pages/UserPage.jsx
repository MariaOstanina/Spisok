import { useEffect, useState } from "react";

export const UserPage = ({ login }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} height="100px" />
      <h3>{data.name}</h3>
      <p>Компания: {data.company}</p>
      <p>Количество подписчиков: {data.followers}</p>
      <p>Количество подписок: {data.following}</p>
    </>
  );
};
