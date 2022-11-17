import React, { useRef } from 'react';
import Grid from '@mui/material/Grid';
import {
  Button,
  Card,
  CardContent,
  Link,
  TextField,
  Typography
} from '@mui/material';
import Image from 'next/image';

import LoginIllustration from '/public/loginIllustration.svg';
import logo from '/public/logo.png';

const Login = () => {

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const loginHandler = () => {
    const inputEmail = emailInputRef.current.value;
    const inputPassword = passwordInputRef.current.value;

    console.log("Email and password are:", inputEmail, inputPassword);
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        justify: 'center',
        justifyContent: 'center',
        display: 'flex',
        background: '#EFF5F5'
      }}
    >
      <Grid item xs={12} sx={{ minHeight: '100vh' }}>
        <Card
          elevation={16}
          sx={{
            minWidth: '80rem',
            minHeight: '60vh',
            maxHeight: '65vh',
            marginY: '10rem',
            zIndex: 1
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} sm={6}>
              <CardContent sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Image src={LoginIllustration} height="600px" />
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ maxWidth: '100%' }}>
              <Grid
                container
                spacing={3}
                alignItems="center"
                direction="column"
                sx={{ minWidth: '100%', display: 'flex' }}
              >
                <Grid item sm={12}>
                  <Typography variant="h5" align="center" alignContent="center">
                    <Image src={logo} width={120} height={120} />
                  </Typography>
                  <Typography variant="h3" align="center" alignContent="center">
                    URJA Portal Login
                  </Typography>
                </Grid>

                {/* Login Form */}

                <form
                  noValidate
                  autoComplete="off"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Grid item sm={12}>
                    <TextField
                      variant="standard"
                      label="Email Address"
                      type="email"
                      fullWidth
                      placeholder="johndoe@gmail.com"
                      required
                      inputRef={emailInputRef}
                      sx={{ width: '30rem', color: '#B6E2A1', marginY: '1rem' }}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <TextField
                      variant="standard"
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      inputRef={passwordInputRef}
                      required
                      fullWidth
                      sx={{ width: '30rem', color: '#B6E2A1', marginY: '2rem' }}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Button variant="contained" type='submit' onClick={loginHandler} fullWidth color="success" sx={{ marginY: '3rem', paddingX: '3rem' }}>
                      Login
                    </Button>
                  </Grid>
                </form>
                <Typography variant='subtitle2' sx={{ marginTop: '-1rem' }} >
                  Don't have an account? <Link href='/register'> Sign up for a new account </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
