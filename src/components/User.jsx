export const User = (props) => {
  return (
    <div onClick={props.onClick}>
      <p style={{ cursor: "pointer" }}>{props.data.login}</p>
      <img
        style={{ cursor: "pointer" }}
        src={props.data.avatar_url}
        height="100px"
      />
    </div>
  );
};
