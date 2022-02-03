import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Nav from './components/nav/Nav';
import Setting from './components/setting/Setting';
import Friends from './components/Profile/friends/Friends';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import IdUserProfile from './components/idUser/IdUserProfile';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';



const App = ({state}) => {
  return (
  <BrowserRouter>
   <div className='wrapper'>
      <HeaderContainer/>
      <div className='wrapper__side'>
          <Nav/>
          {/* <Friends dataFriend={state.sidebar.friends}/> */}
      </div>
       <div className='wrapper__content'>
       <Routes>
           <Route path='/login' element={<Login/>}/>
           <Route path='/Profile' element={<ProfileContainer/>}/>
           <Route path='/Profile/:id' element={<IdUserProfile/>}/>
           <Route path='/dialogs/*' element={<DialogsContainer/>}/>
           <Route path='/setting' element={<Setting/>}/>
           <Route path='/users' element={<UsersContainer/>}/> 
       </Routes>
      </div>    
  </div>
  </BrowserRouter>
  )
}

export default App;
