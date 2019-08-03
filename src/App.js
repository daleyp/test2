import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout >
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.7)', fontWeight:'bolder'}} to="/">Patrick Daley</Link>} scroll>
            <Navigation>
                <Link style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.701)', fontWeight:'bold', fontSize: 'large'}} to="/resume">Resume</Link>
                <Link style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.701)', fontWeight:'bold' ,fontSize: 'large'}} to="/aboutme">About Me</Link>
                <Link style={{textDecoration: 'none',  color: 'rgba(0, 0, 0, 0.701)', fontWeight:'bold' ,fontSize: 'large'}} to="/projects">Projects</Link>
                <Link style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.701)', fontWeight:'bold',fontSize: 'large'}} to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer  title={<Link style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.8)', fontWeight:'bolder'}} to="/">Patrick Daley</Link>}>
            <Navigation style={{color: 'rgba(0, 0, 0, 0.8)', fontWeight:'bolder'}}>
              <Link style={{color: 'rgba(0, 0, 0, 0.8)', fontWeight:'bolder'}} to="/resume">Resume</Link>
              <Link style={{color: 'rgba(0, 0, 0, 0.8)', fontWeight:'bolder'}} to="/aboutme">About Me</Link>
              <Link style={{color: 'rgba(0, 0, 0, 0.8)', fontWeight:'bolder'}} to="/projects">Projects</Link>
              <Link style={{color: 'rgba(0, 0, 0, 0.8)', fontWeight:'bolder'}} to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content >
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
