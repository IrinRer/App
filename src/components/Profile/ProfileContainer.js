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
    this.props.getProfileId(this.props.id);
    this.props.getStatus(this.props.id);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} 
    status = {this.props.status} updateStatus={this.props.updateStatus}/>;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
  };
};

export default compose(
  connect(mapStateToProps, { getProfileId, getStatus, updateStatus }),
  AuthRedirect)(ProfileContainer);
