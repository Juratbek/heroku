import React from 'react';
import SignIn from "./pages/sign_in/SignIn";
import {Route} from "react-router-dom";
import SignUp from "./pages/sign_up/SignUp";

function App() {
    return (
        <div className="container mt-5">
            <div className="row">
                <Route exact path="/" component={SignIn}/>
                <Route exact path="/sign_up" component={SignUp}/>
            </div>
        </div>
    );
}

export default App;
