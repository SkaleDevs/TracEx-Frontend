import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import { ethers } from "ethers";
import SupplyChain from '../../../lib/SupplyChainAbi.json';
import {
  Box,
  Card,
  Typography,
  Container,
  FormLabel,
  FormControlLabel,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  styled
} from '@mui/material';
import ProgressLocationBar from "../../../src/content/Dashboards/Crypto/ProgressLocationBar"

const Form = () => {

  const [hash, setHash] = useState();
  const [historyList, setHistoryList] = useState([]);
  const [lastActiveStep, setLastActiveStep] = useState(3);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setHash(value);
  };

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    console.log(accounts);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(hash)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    connectWallet()
    const SupplyChainContract = new ethers.Contract(
      '0xcaCB93B5E1b35CFF4b2aDfb538e29539243c554E',
      SupplyChain.abi,
      signer
    );
    const products = await SupplyChainContract.getSingleProduct(hash);
    const {manufacturer,supplier,vendor} = products[1];
    const arr = [manufacturer["0"], supplier["0"], vendor["0"]];
    console.log(arr)
    setHistoryList(arr);
    setLastActiveStep(arr.indexOf('0x0000000000000000000000000000000000000000') === -1? 3 : arr.indexOf('0x0000000000000000000000000000000000000000'))
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Type in your code to reveal history
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="hash"
            label="Code"
            name="hash"
            autoComplete="hash"
            autoFocus
            onChange={handleInputChange}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Check
          </Button>
        </Box>
        <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}

      >
      </Box>
      <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
>
  {hash? <ProgressLocationBar activeStepValue={lastActiveStep} shipmentCurrentHashValue={hash} text={historyList} fillFormBool={false}/>:null}
</Box>
      </Box>
    </Container>
  );
};
export default Form;