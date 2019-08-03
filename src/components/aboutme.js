import React, { Component,  } from 'react';
import {
  Grid,
  Cell
} from 'react-mdl';


class About extends Component {
  render() {
    return(
     <div className="about-grid">
        <Grid className="landing-grid">
          <Cell col={12}>
           <img
            src="https://avatars0.githubusercontent.com/u/10747804?s=400&u=e1c3fb73ba8153791cb17f4e5d62ce659eb82320&v=4"
            alt="avatar"
            className="avatar-img"
            />

          <div className="banner-text">
            <h1>About Me</h1>
            <p style={{color: 'rgba(0, 0, 0, 0.8)', fontWeight:'bold', textDecoration:'none'}} >An aspiring web developer with a passion for solving problems, team colaboration and using the knowledge i have gain to help others. My past experience at Verizon has helped me to become a significantly better team player, improved my critical thinking skills. It also reignited my passion for software development. As such, pursing this career path is my passion.</p>

          <hr/>
          </div>
         </Cell>
       </Grid>

     </div>
    )
  }
}

export default About;
