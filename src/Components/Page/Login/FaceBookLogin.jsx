import { LoadingButton } from '@mui/lab';
import { Box, Button } from '@mui/material';
import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { IoLogoGoogle, IoLogoFacebook } from 'react-icons/io';
import useStyles from "../../../Style"
import axios from 'axios';
const FaceBookLogin = () => {
  const classes = useStyles()
  const responseFacebook = (response) => {
    try {
      console.log('response >>>', response)
      if (response) {

        axios.post("https://sweede.app/UserPanel/FacebookSignInView/", {
        access_token:response.accessToken
 
        },
        ).then(response => {

        }).catch(
          function (error) {

          })
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <FacebookLogin
      appId="218951724397904"
      // authType="Login"
      callback={responseFacebook}
      fields="name, email,picture"
      scope="public_profile, email"
      render={renderProps => (
        <Box
          className={`${classes.Signup_loading_btn_Googles}`}
        >
          <LoadingButton onClick={renderProps.onClick} variant="outlined" loadingPosition="start" startIcon={<IoLogoFacebook />}> Continue with FaceBook</LoadingButton>
        </Box>
      )}
    />
  )

}

export default FaceBookLogin;