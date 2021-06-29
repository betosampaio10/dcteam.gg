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
import Campeonato from './Components/Campeonato/Campeonato'
//import News from './Components/News'
import Pubgm from './Components/Lines/Pubgm'
import NotFound from './Components/NotFound'
import logo from './Assets/Logo/Logo1.png'
import whatsapp from './Assets/Campeonato/whatsapp.png'
import { NavigationProvider } from './contexts/navigationContext'

class App extends Component {
  render() {
    return (
      <div id="page-container">
        <ReactNavbar color="rgb(32, 32, 32)" logo={logo} />
        <div id="content-wrap">
          <Router>
            <div className="render-content">
              <Switch>
                <Route exact path={'/'} component={Main} />
                <Route path={'/aboutus'} component={withRouter(AboutUs)} />
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
        <a href="https://api.whatsapp.com/send?phone=551193758-2250" className='float-right' >
					<img src={whatsapp} className="fab fa-whatsapp whatsIcon"/>
				</a>
      </div >
    );
  }
}

export default App;
