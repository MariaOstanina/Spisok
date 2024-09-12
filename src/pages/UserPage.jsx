import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { useParams} from "react-router-dom";

export const UserPage = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header/>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} height="100px" />
      <h3>{data.name}</h3>
      <p>Компания: {data.company}</p>
      <p>Количество подписчиков: {data.followers}</p>
      <p>Количество подписок: {data.following}</p>
    </>
  );
};
