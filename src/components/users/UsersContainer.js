import { connect } from "react-redux";
import {followActionCreater, setUsersActionCreater, 
setCurrentActionCreater, setUserCountActionCreater} from '../../redux/UsersReducer';
import UsersC from "./UsersC";


let mapStateToProps = (state) => {
    return {
      users: state.users.users,
      pageSize: state.users.pageSize,
      totalUsersCount: state.users.totalUsersCount,
      currenPage: state.users.currenPage
    }
  };
  
  let mapDispathToProps = (dispatch) => {
    return {
      followed: id => dispatch(followActionCreater(id)),
      setUser: users => dispatch(setUsersActionCreater(users)),
      setPage: page => dispatch(setCurrentActionCreater(page)),
      setUserCount: count => dispatch(setUserCountActionCreater(count))
    }
  };
  
  const UsersContainer = connect(mapStateToProps, mapDispathToProps)(UsersC)
  export default UsersContainer;
