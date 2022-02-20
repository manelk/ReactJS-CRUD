import './App.css';
import React, { Component }  from 'react';
import Create from './components/create/create';
import Read from './components/read/read';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Update from './components/update/update';
import Form from './components/form';

function App() {
  return (

    <Router>
      <Header/>
      <div className="main">
        {/* <div>
          <h3>React Crud Operations</h3>
        </div> */}
         <div>
          <Route exact path='/Form' component={Form} />
        </div>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/' component={Read} />
        </div>
        <Route path='/update' component={Update} />
      </div> 
      <Footer></Footer>
    </Router>
  );
}

export default App;
