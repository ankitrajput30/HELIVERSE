import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const Address = ({ prevStep, nextStep, handleChange, values }) => {

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
          Address
        </Typography>
        <form>
          <Grid container spacing={2}>

            {/* first name */}
            <Grid item xs={8}>
              <TextField
                placeholder="States"
                label="States"
                onChange={handleChange('states')}
                defaultValue={values.states}
              />
            </Grid>
            {/* last name */}
            <Grid item xs={8}>
              <TextField
                placeholder="District"
                label="District"
                onChange={handleChange('district')}
                defaultValue={values.district}
              />
            </Grid>

            {/* country of residence */}
            <Grid item xs={8}>
              <TextField
                placeholder="Postal Code"
                label="Postal Code"
                onChange={handleChange('postalcode')}
                defaultValue={values.postalcode}
                // autoComplete="country"
              />
            </Grid>

            {/* level of education */}
            <Grid item xs={8}>
              <TextField
                placeholder="Contact"
                label="Contact"
                onChange={handleChange('contact')}
                defaultValue={values.contact}
                // autoComplete="Level of Education"
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

export default Address
