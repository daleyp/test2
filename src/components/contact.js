import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Patrick Daley</h2>
            <img
              src="https://avatars0.githubusercontent.com/u/10747804?s=400&u=e1c3fb73ba8153791cb17f4e5d62ce659eb82320&v=4"
              alt="avatar"
              style={{height: '250px', borderRadius: '50%', paddingTop: '1em'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '2em'}}>Thank you for taking the time out to review my website. Please feel free to contact me at any of the links on the right. I would be more than happy to hear from you!</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
                    <a href='tel:561315-0222'><i className="fa fa-phone-square" style={{fontSize: '76px'}} aria-hidden="true"/></a>(561)-315-0222
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <a alt='email' href='mailto:patrickkdaley@gmail.com'><i className="fa fa-envelope" aria-hidden="true"/></a>
                  patrickkdaley@gmail.com
                  </ListItemContent>
                </ListItem>
                
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
