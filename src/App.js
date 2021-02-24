import React from 'react';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebase"
import userEvent from '@testing-library/user-event';
import Login from './Components/Login';
import Spinner from  "react-spinkit"

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
      <AppLoadingContents>
      <img 
         src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""
          />

          <Spinner
          name="ball-spin-fade-loader"
          color="purple" fadeIn="none"
          />
      </AppLoadingContents>
    </AppLoading>
 )
 }
    
  

  return (
    <div className="app">
    <Router>
      {!user ? (
        <Login/>
      ) : (
<>
      <Header />
      <AppBody> 
        <Sidebar/>
        <Switch>
        <Route path="/" exact>
         <Chat />
          </Route>
        </Switch>
        </AppBody>
      </>

      )}
      
    </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
display: grid;
place-items: center;
height: 100vh;
width: 100%100vh;
`;
const AppLoadingContents = styled.div`
text-align: center;
padding-bottom: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> img {
  height: 100px;
  padding: 20px;
  margin-bottom: 40px;
}
`;
  const AppBody = styled.div`
  display:flex;
  height: 100vh;
  `;

  