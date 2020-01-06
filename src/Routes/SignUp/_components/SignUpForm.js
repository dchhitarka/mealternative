import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  InputAdornment,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';
import PasswordInput from '../../../Common/Inputs/PasswordInput';
import EmailInput from '../../../Common/Inputs/EmailInput';

const SignUpForm = props => {
  const { classes, formState, handleFormChange } = props;
  const { username, email, password } = formState;
  console.log(formState);

  return (
    <form className={classes.signUpForm}>
      <TextField
        variant='outlined'
        placeholder='User name'
        label='User name'
        value={username}
        name='username'
        onChange={handleFormChange}
        className={classes.signUpInput}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
      <EmailInput
        name='email'
        value={email}
        onChange={handleFormChange}
        className={classes.signUpInput}
      />
      <PasswordInput
        name='password'
        value={password}
        onChange={handleFormChange}
        className={classes.signUpInput}
      />
      <Button
        className={classes.signUpButton}
        variant='contained'
        color='primary'
      >
        Sign Up
      </Button>
      <Typography
        variant='caption'
        component='div'
        className={classes.signUpLinks}
      >
        <Link to='signin'>Already have an account? Sign In</Link>
      </Typography>
    </form>
  );
};

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
  formState: PropTypes.object.isRequired,
  handleFormChange: PropTypes.func.isRequired
};

export default SignUpForm;
