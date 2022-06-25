import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const { firstName, lastName, email, username, country, levelOfEducation, states, district, postalcode, contact } = values
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Username" secondary={username} />
          </ListItem>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Country of Residence" secondary={country} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Level of Education" secondary={levelOfEducation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="States" secondary={states} />
          </ListItem>
          <ListItem>
            <ListItemText primary="District" secondary={district} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Postal Code" secondary={postalcode} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Contact" secondary={contact} />
          </ListItem>
        </List>
      </div>
    </Container>
  )
}

export default Confirmation
