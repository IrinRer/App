import { Component } from "react";
import { connect } from "react-redux";
import { getProfileId } from "../../redux/ProfileReducer";
import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getProfileId(this.props.id);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { getProfileId })(ProfileContainer);
