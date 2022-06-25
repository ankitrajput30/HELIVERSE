import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {

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
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form>
          <Grid container spacing={2}>

            {/* first name */}
            <Grid item xs={8}>
              <TextField
                placeholder="First Name"
                label="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              />
            </Grid>
            {/* last name */}
            <Grid item xs={8}>
              <TextField
                placeholder="Last Name"
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
            </Grid>

            {/* country of residence */}
            <Grid item xs={8}>
              <TextField
                placeholder="Country of Residence"
                label="Country of Residence"
                onChange={handleChange('country')}
                defaultValue={values.country}
                autoComplete="country"
              />
            </Grid>

            {/* level of education */}
            <Grid item xs={8}>
              <TextField
                placeholder="Level of Education"
                label="Level of Education"
                onChange={handleChange('levelOfEducation')}
                defaultValue={values.levelOfEducation}
                autoComplete="Level of Education"
              />
            </Grid>
            <Grid item xs={5}>
              <Button
                onClick={Previous}
                type="submit"
                variant="contained"
                color="primary"
              >
                Prev
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={Continue}
                type="submit"
                variant="contained"
                color="primary"
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

export default PersonalDetails
