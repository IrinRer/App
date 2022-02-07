import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import {
  getProfileId,
  updateStatus,
  getStatus,
} from "../../redux/ProfileReducer";
import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.id;
    if (!userId) {
      userId = this.props.idAuth;
      if(!userId) {
         this.props.history.push('/login');
      }
    }
    this.props.getProfileId(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

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
