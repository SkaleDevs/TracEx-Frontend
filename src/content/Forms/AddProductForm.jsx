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

const AddProductForm = () => {
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
          {/* <Grid item xs={12} sm={6}>
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
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Manufacturer Name"
                variant="outlined"
                onChange={(e) => setGrantedFund(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Manufacturer Email"
                variant="outlined"
                type="email"
                onChange={(e) => setGrantedFund(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="date"
                label="Manufacturer Date"
                helperText="dd/MM/yyyy"
                type="date"
                defaultValue="2022-11-24"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="date"
                label="Expires In (days)"
                helperText="dd/MM/yyyy"
                type="date"
                defaultValue="2022-11-24"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                multiline
                maxRows={4}
                label="Product Name"
                onChange={(e) => setDetails(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="productType">Choose Product Type</InputLabel>
              <Select
                labelId="productType"
                id="productType"
                label="Choose Product Type"
                onChange={(e) => setSchemeName(e.target.value)}
              >
                <MenuItem value="Individual">Individual</MenuItem>
                <MenuItem value="Batch">Batch</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                multiline
                maxRows={4}
                label="Product ID"
                onChange={(e) => setDetails(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                multiline
                maxRows={4}
                label="Product Image"
                helperText='Insert image URL'
                onChange={(e) => setDetails(e.target.value)}
              />
            </FormControl>
          </Grid>
          {/* <Typography variant="title">General Information</Typography> */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="scheme">Type</InputLabel>
              <Select
                labelId="Type"
                id="Type"
                label="Type"
                onChange={(e) => setSchemeName(e.target.value)}
              >
                <MenuItem value="Type 1">Type 1</MenuItem>
                <MenuItem value="Type 2">Type 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button sx={{ flex: 1 }}>Submit</Button>
      </CardActions>
    </Card>
  );
};

export default AddProductForm;
