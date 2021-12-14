
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Work from './Components/Work/Work';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/works">
              <Work></Work>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
          </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
