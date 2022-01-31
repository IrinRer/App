import { Component } from 'react';
import { connect } from "react-redux";
import * as axios from "axios";
import {setProfile} from '../../redux/ProfileReducer';
import Profile from './Profile';

class ProfileContainer extends Component {
    componentDidMount() {
        axios
        .get('https://social-network.samuraijs.com/api/1.0/profile/2')
        .then((response) => {
            this.props.setProfile(response.data);
          });

    }

    render() {
    return (
            <Profile {...this.props} profile = {this.props.profile}/>
    );
 }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profile.profile
      };
}


export default connect(mapStateToProps, {setProfile})(ProfileContainer);