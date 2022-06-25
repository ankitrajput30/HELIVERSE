import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const UserDetails = ({ nextStep, handleChange, values }) => {

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
          <Typography component="h1" variant="h5" align='center'>
            React Multi Step Form
          </Typography>
          <br></br><br></br>
          <form>
            <Grid container spacing={12}>
              {/* email address */}
              <Grid item xs={8}>
                <TextField
                  placeholder="Email Address"
                  label="Email Address"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  // variant="outlined"
                  autoComplete="email"
                />
              </Grid>
              {/* username */}
              <Grid item xs={8}>
                <TextField
                  placeholder="Username"
                  label="Username"
                  onChange={handleChange('username')}
                  defaultValue={values.username}
                  // variant="outlined"
                  autoComplete="username"
                />
              </Grid>
              {/* password */}
              <Grid item xs={8}>
                <TextField
                  placeholder="Password"
                  label="Password"
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  // variant="outlined"
                  autoComplete="password"
                  type="password"
                />
              </Grid>
            <br /> 
            <Grid item xs={8}>
            <br/>
            <Button
              onClick={Continue}
              type="submit"
              variant="contained"
              color="success"
            >
              Next
            </Button>
            </Grid>
            </Grid>
          </form>
        </div>
    </Container>
  )
}

export default UserDetails
