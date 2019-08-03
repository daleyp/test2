import React, {
  Component
} from 'react';
import {
  Grid,
  Cell
} from 'react-mdl';
import pdf from '../components/Resume_July_2019.docx';




class Resume extends Component {
  render() {
    return ( 
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src="https://avatars0.githubusercontent.com/u/10747804?s=400&u=e1c3fb73ba8153791cb17f4e5d62ce659eb82320&v=4"
            alt="avatar"
            className="avatar-img"
            />
          
          <div className="banner-text">
          
          <h1><a style={{color: 'rgba(0, 0, 0, 0.8)', fontWeight:'bolder', textDecoration:'none'}} href={pdf}>My Resume</a></h1>
          
          <hr/>
          </div>
          
         
        </Cell>
      </Grid>
    </div>
  )
}
}
 

export default Resume;