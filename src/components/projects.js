import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton  } from 'react-mdl';
import pic from './background.png';
import robofriends from './robofriends.png';
import smartbrain from './smartbrain.png';

class Projects extends Component {
  render() {
    return ( 
      <div  style={{width: '100%', margin: 'auto'}}>
      <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + pic + ') center/ cover'}}  >Background Generator App</CardTitle>
            <CardText>
              Created an app that generates a linear gradient from two colors pickers, then displays the style on the documents using Dom malipulation.
            </CardText>
            <CardActions border>
              <Button colored><a style={{textDecoration: 'none', color: 'blue'}}href="https://github.com/daleyp/background-generator">GitHub</a></Button>
              <Button colored><a style={{textDecoration: 'none', color: 'blue'}} href="https://daleyp.github.io/background-generator/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontWeight: 'bolder', height: '176px', background: 'url(' + robofriends + ') center/ cover'}} >RoboFriends App</CardTitle>
            <CardText>
              First react app that searches through Robot friends, their contact information. The app is responsive, fast and updates live.
            </CardText>
            <CardActions border>
            <Button colored><a style={{textDecoration: 'none', color: 'blue'}}href="https://github.com/daleyp/deploy">GitHub</a></Button>
            
            <Button colored><a style={{textDecoration: 'none', color: 'blue'}} href="https://daleyp.github.io/deploy">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + smartbrain + ') center/ cover'}} >Smart Brain App</CardTitle>
            <CardText>
              An app that uses React for the Front-end, an image recognition api, it has its own server using node and express and a database.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
          <hr/>
       
       </div>
       
      
  )
}
}

export default Projects;