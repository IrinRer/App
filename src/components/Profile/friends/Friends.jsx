import Friend from "./friend/Friend";
import classes from "./Friends.module.css";

const Friends = ({dataFriend}) => {
const friendDat = dataFriend.map(item => {
  return (
        <Friend name = {item.name} key = {item.id}/>
  );
});

  return (
    <div className={classes.wrapper}>
      <p>Friends</p>
      <div className={classes.wrapper__cicle}>
          {friendDat}
      </div>
    </div>
  );
};

export default Friends;
