import classes from "./Users.module.scss";
import img from "./img/search.svg";
import avatar from "./img/atomic.png";

const Users = ({users, followed, pageSize, totalUsersCount, currenPage, onPageChange}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pagesArr = [];

    for (let i = 1; i <= pageCount; i++) {
        debugger;
      if(i < 10) {
      pagesArr.push(i);
      }
    }
    const element = users.map((item) => {
        return (
          <div key={item.id} className={classes.wrapper}>
            <div className={classes.wrapper__img}>
              <img src={item.photos.small != null ? item.photos.small : avatar} />
              {/* <img src={avatar} /> */}
              <button onClick={() => followed(item.id)}>
                {item.followed ? "Follow" : "Unfollow"}
              </button>
            </div>
            <div className={classes.wrapper__inf}>
              <h3>{item.name}</h3>
              <h3>{item.country}</h3>
              <h3>{item.city}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        );
      });
  
      return (
        <>
          {pagesArr.map((item, i) => {
            return (
              <span
                className={currenPage === item ? classes.currenPage : null} 
                onClick={() => {onPageChange(item)}} key={i}>
                {item}
              </span>
            );
          })}
          <form className={classes.form}>
            <input type="text" placeholder="Search" />
            <button type="submit">
              <img src={img} alt="icon search" />
            </button>
          </form>
          {element}
        </>
      );
}
export default Users;