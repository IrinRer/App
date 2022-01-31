import { Component } from 'react';
import Profile from './Profile';
import * as axios from "axios";
import { connect } from "react-redux";
import {setProfile} from '../../redux/ProfileReducer';

class ProfileContainer extends Component {
 componentDidMount() {
     axios
     .get('https://gateway.marvel.com:443/v1/public/characters/1011143?apikey=6ca5ae70a337e9cd63b6cd813ca09821')
     .then((response) => {
         this.props.setProfile(response.data.data.results[0]);
        });
 }

    render() {
    return (
       <Profile {...this.props} profile={this.props.profile}/>
    );
  }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profile.profile
    }
}
 
export default connect(mapStateToProps, {setProfile})(ProfileContainer);