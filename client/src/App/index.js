import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import mainTheme from '../styles/variables.js'

// Components
import Header from './Header/index'
import Footer from './Footer/index'
import Sidebar from './Sidebar/index'
import PageContainer from './PageContainer/index'

// Views
import Home from '../views/Home/index'
import About from '../views/About/index'

class App extends Component {

  render() {
    return (
      <Router>
        <ThemeProvider theme={mainTheme}>
          <div>
            <Header />
            <Sidebar />
            <PageContainer>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </PageContainer>
            <Footer />
          </div>
        </ThemeProvider>
      </Router>
    );
  }

}

export default App;
