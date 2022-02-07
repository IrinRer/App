import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";
import Nav from "../nav/Nav";
import Setting from "../setting/Setting";
import DialogsContainer from "../dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import IdUserProfile from "../idUser/IdUserProfile";
import HeaderContainer from "../header/HeaderContainer";
import Login from "../login/Login";
import IdUserDialogs from "../idUser/IdUserDialogs";
import { initializeApp } from "../../redux/AppReducer";
import Spinner from "../spinner/Spinner";

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, []);

  if (props.initialized) {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <HeaderContainer />
          <div className="wrapper__side">
            <Nav />
          </div>
          <div className="wrapper__content">
            <Routes>
              <Route path="/Profile" element={<ProfileContainer />} />
              <Route path="/Profile/:id" element={<IdUserProfile />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/dialogs/:id" element={<IdUserDialogs />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  } else {
    return <Spinner />;
  }
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
