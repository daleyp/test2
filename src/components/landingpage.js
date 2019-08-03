import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://avatars0.githubusercontent.com/u/10747804?s=400&u=e1c3fb73ba8153791cb17f4e5d62ce659eb82320&v=4"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Web Developer</h1>

            <hr/>

          <p>HTML | CSS | JavaScript | React | Git/Github | NodeJS </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/patrick-daley-6a7ab099/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/daleyp" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
         </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
