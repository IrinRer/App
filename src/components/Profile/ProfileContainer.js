import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
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
    profile: state.profile.profile
  };
};


export default compose( connect(mapStateToProps, { getProfileId }),
 AuthRedirect)(ProfileContainer);

