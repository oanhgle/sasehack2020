import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Record from "./components/Record/Record";
import Appointment from "./components/Appointment/Appointment";
import Doctor from "./components/Doctor/Doctor";
import Information from "./components/Information/Information";
import Chatbot from "./components/ChatBot/ChatBot";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/record" component={Record} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/doctor" component={Doctor} />
          <Route path="/information" component={Information} />

          {/* <Route exact from="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/record"
            render={(props) => <Record {...props} />}
          />
          <Route
            exact
            path="/appointment"
            render={(props) => <Appointment {...props} />}
          />
          <Route
            exact
            path="/doctor"
            render={(props) => <Doctor {...props} />}
          />
          <Route
            exact
            path="/information"
            render={(props) => <Information {...props} />}
          /> */}
        </Switch>
      </Router>
      <div className="chatbot">
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
