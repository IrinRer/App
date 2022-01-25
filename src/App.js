import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/news/News';
import Music from './components/music/Music';
import Setting from './components/setting/Setting';
import Friends from './components/Profile/friends/Friends';
import DialogsContainer from './components/dialogs/DialogsContainer';



const App = ({state, dispatch}) => {
  return (
  <BrowserRouter>
   <div className='wrapper'>
      <Header/>
      <div className='wrapper__side'>
          <Nav/>
          <Friends dataFriend={state.sidebar.friends}/>
      </div>
       <div className='wrapper__content'>
       <Routes>
           <Route path='/Profile' element={<Profile dataPost={state.profile.dataPost} dispatch={dispatch} 
           newPost={state.profile.newPost}/>}/>
           <Route path='/dialogs/*' element={<DialogsContainer data={state.messages.data} dataMess={state.messages.dataMess} 
           dispatch={dispatch} newMessage={state.messages.newMessage}/>}/>
           <Route path='/news' element={<News/>}/>
           <Route path='/music' element={<Music/>}/>
           <Route path='/setting' element={<Setting/>}/>
       </Routes>
      </div>    
  </div>
  </BrowserRouter>
  )
}

export default App;
