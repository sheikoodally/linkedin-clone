import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">

      {/*Header*/}
      <Header/>

      {!user ? 
      ( 
        <Login /> 
      ) : 
      (
        <div className="app_body">
          {/*Sidebar*/}
          <Sidebar/>
          {/*Feed*/}
          <Feed/>
          {/*Widget*/}
          <Widget/>
        </div>  
      )}

    </div>
  );
}

export default App;
