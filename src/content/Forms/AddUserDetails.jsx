import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import SupplyChain from '../../../lib/SupplyChainAbi.json';

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

const AddUserDetails = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();

  const submitHandler = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const SupplyChainContract = new ethers.Contract(
      '0x90BFb6689e026011F4559E6ab8Ad0aFe642b0EDe',
      SupplyChain.abi,
      signer
    );
    console.log(name, email, address);
    // const userDetails = { name, email, address };
    let party = await SupplyChainContract.addParty([1, address, name, email], {
      gasLimit: 5000000
    });
    // console.log(userDetails);
  };
  return (
    <Card
      elevation={2}
      sx={{
        minHeight: '10rem',
        paddingY: '1rem',
        marginTop: '2rem',
        justifyContent: 'center',
        justifyItems: 'center',
        paddingX: '1rem',
        width: '100%'
      }}
    >
      <CardHeader title="Add User Details" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Address"
                placeholder="0x616225F50fA2b77F5e8e592468fa1cE37ba46a3a"
                variant="outlined"
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={submitHandler}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddUserDetails;
