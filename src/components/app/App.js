import React, { useEffect, Suspense} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";
import Nav from "../nav/Nav";
import IdUserProfile from "../idUser/IdUserProfile";
import HeaderContainer from "../header/HeaderContainer";
import IdUserDialogs from "../idUser/IdUserDialogs";
import { initializeApp } from "../../redux/AppReducer";
import Spinner from "../spinner/Spinner";
import { useTheme } from "../hook/useTheme";

const Setting= React.lazy(() => import('../setting/Setting'));
const DialogsContainer = React.lazy(() => import('../dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('../users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));
const Login = React.lazy(() => import('../login/Login'));

const App = (props) => {

  const {theme, setTheme} = useTheme();

  useEffect(() => {
    props.initializeApp();
  }, []);

  if (props.initialized) {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Suspense fallback={<Spinner/>}>
        <div className="wrapper">
          <HeaderContainer />
          <div className="wrapper__side">
            <Nav />
          </div>
          <div className="wrapper__content">
            <Routes>
              <Route path="/" element={<ProfileContainer />} />
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
        </Suspense>
      </BrowserRouter>
    );
  }
   else {
    return <Spinner />;
  }
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
