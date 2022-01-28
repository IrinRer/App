import classes from "./Users.module.scss";

const Users = ({ users, followed, setUser}) => {
  const element = users.map((item) => {
    return (
      <div key={item.id}>
        <div className={classes.wrapper__inf}>
          <h3>{item.name}</h3>
          <h3>{item.country}</h3>
          <h3>{item.city}</h3>
          <p>{item.status}</p>
        </div>
        <div className={classes.wrapper__img}>
          <img src={item.thumbnail}></img>
          <button onClick={() => followed(item.id)}>{ item.followed ? 'Follow' : 'Unfollow'}</button>
        </div>
      </div>
    );
  });
  debugger;
  return <div className={classes.wrapper}>{element}</div>;
};

export default Users;
