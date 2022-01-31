import { Component} from 'react';
import { connect } from "react-redux";
import * as axios from "axios";
import {setProfile} from '../../redux/ProfileReducer';
import Profile from './Profile';
import IdUserProfile from '../idUser/IdUserProfile';

class ProfileContainer extends Component {
    componentDidMount() {
        if(this.props.id) {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`)
        .then((response) => {
            debugger;
            this.props.setProfile(response.data);
          });
        }

        else {
            axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then((response) => {
            debugger;
            this.props.setProfile(response.data);
          });
        }
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