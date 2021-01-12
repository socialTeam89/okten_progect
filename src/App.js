import { Route,Switch,Redirect } from 'react-router';
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import React from "react";


function App() {
  return (
    <div>
        <Switch>
          <Route path='/SingIn'  component={SignIn}/>
          <Route path='/SingUp'  component={SignUp}/>
          <Redirect to='/'/>
        </Switch>
    </div>
  );
}

export default App;
