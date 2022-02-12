import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import {
  getProfileId,
  updateStatus,
  getStatus,
} from "../../redux/ProfileReducer";
import Profile from "./Profile";

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = props.id;
    if (!userId) {
      userId = props.idAuth;
      if (!userId) {
        props.history.push("/login");
      }
    }
    props.getProfileId(userId);
    props.getStatus(userId);
  }, [props.id]);

  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    idAuth: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { getProfileId, getStatus, updateStatus }),
  AuthRedirect
)(ProfileContainer);
