import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ReactNavbar } from "./Components/NewNavbar/index";
import NoticesGrid from './Components/Notices/Notices.js'
import { Footer } from "./Components/Footer/Footer"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import Main from './Components/Main'
import AboutUs from './Components/AboutUs'
import Campeonato from './Components/Campeonato'
//import News from './Components/News'
import Pubgm from './Components/Lines/Pubgm'
import NotFound from './Components/NotFound'

import { NavigationProvider } from './contexts/navigationContext'

class App extends Component {
  render() {
    return (
      <div id="page-container">
        <ReactNavbar color="rgb(32, 32, 32)" logo="https://i.imgur.com/PUKEy4i.png" />
        <div className="photo-render">
          <div className="render-notices">
            <NoticesGrid />
          </div>
        </div>
        <div id="content-wrap">
          <Router>
            <div className="render-content">
              <Switch>
                  <Route exact path={'/'} component={Main} />
                  <Route path={'/aboutus'} component={withRouter(AboutUs)} />
                  <Route path={'/pubgm'} component={Pubgm} />
                  <NavigationProvider>
                  <Route path={'/campeonato'} component={Campeonato} />
                  </NavigationProvider>
                  <Route component={NotFound} />
              </Switch>
            </div>
          </Router>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div >
    );
  }
}

export default App;
