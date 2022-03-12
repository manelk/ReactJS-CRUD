import "./App.css";
import React from "react";
import Create from "./components/create/create";
import Read from "./components/read/read";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Update from "./components/update/update";
import Form from "./components/form";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";

function App(props) {
  return (
    /**<div>
    {
        location.pathname # '/login' &6 location.pathname # '/signup' &6 <Navbar/>
    }
    <Route exact path="/" component={Welcome} >
    <Route path="/login" component={Login}>
    <Route path="/signup" component={Signup}/>
    <Route path="/article/:id" component={SingleArticle}>
    <Route path="/articles/create" component={CreateArticle}>
    {
        location.pathname # '/login' 66 location.pathname # '/signup' &6 <Footer/>
    } */
    <Router>
      {/* <Header /> */}
      <div className="main">
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Form" component={Form} />
        <Route exact path="/create" component={Create} />
        <div style={{ marginTop: 20 }}>
          <Route exact path="/" component={Read} />
        </div>
        <Route path="/update" component={Update} />
      </div>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
