import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// icon imports
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';

const MileOne = () => {
  const [schemeName, setSchemeName] = useState();
  const [grantedFund, setGrantedFund] = useState();
  const [expectedImplementationTime, setExpectedImplementationTime] =
    useState();
  const [date, setDate] = useState();
  const [details, setDetails] = useState();

  return (
    <Card
      elevation={2}
      sx={{
        minHeight: '10rem',
        paddingY: '1rem',
        justifyContent: 'center',
        justifyItems: 'center',

        width: '100%'
      }}
    >
      <CardHeader
        title="Made a contribution to saving Energy ? ( Mile 1 : 10C Reward )"
        subheader="Share with us and earn rewards !"
      />
      <CardContent>
        {/* <form method="post" onSubmit={(e) => e.preventDefault()}> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="scheme">Scheme Name</InputLabel>
              <Select
                labelId="scheme"
                id="scheme"
                label="Scheme Name"
                onChange={(e) => setSchemeName(e.target.value)}
              >
                <MenuItem value="AJAY Phase-3">AJAY Phase-3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Granted Fund"
                variant="outlined"
                onChange={(e) => setGrantedFund(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupeeIcon />
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Expected Implementation Time"
                variant="outlined"
                onChange={(e) => setExpectedImplementationTime(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="2022-11-24"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormControl>
          </Grid>
          {/* <Grid item xs={12} sm={6}></Grid> */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                multiline
                maxRows={4}
                id="details"
                label="Details ( optional )"
                placeholder="Want to share your contribution experience? Go ahead !"
                onChange={(e) => setDetails(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button>Submit</Button>
      </CardActions>
    </Card>
  );
};

export default MileOne;
