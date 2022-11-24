import React from 'react';
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

const MileTwo = () => {
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
        title="Made a contribution to saving Energy ?( Mile 2 )"
        subheader="Share with us and earn rewards !"
      />
      <CardContent>
        {/* <form method="post" onSubmit={(e) => e.preventDefault()}> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="scheme">Scheme Name</InputLabel>
              <Select labelId="scheme" id="scheme" label="Scheme Name">
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
                type="time"
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
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                multiline
                maxRows={4}
                id="date"
                label="Details ( optional )"
                placeholder="Want to share your contribution experience? Go ahead !"
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MileTwo;
