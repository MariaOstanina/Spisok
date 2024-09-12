import { Link } from "react-router-dom";

export const User = ({data}) => {
  return (
    <Link to={`/user/${data.login}`}>
      <p style={{ cursor: "pointer" }}>{data.login}</p>
      <img
        style={{ cursor: "pointer" }}
        src={data.avatar_url}
        height="100px"
      />
    </Link>
  );
};
