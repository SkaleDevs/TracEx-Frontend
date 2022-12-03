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

const AddProductForm = () => {
  const [manufacturerName, setManufacturerName] = useState();
  const [manufacturerEmail, setManufacturerEmail] = useState();
  const [manufacturingDate, setManufacturingDate] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [productName, setProductName] = useState();
  const [productType, setProductType] = useState();
  const [productId, setProductId] = useState();
  const [productImage, setProductImage] = useState();
  const [type, setType] = useState();
  const [scientificName, setScientificName] = useState();
  const [usage, setUsage] = useState();

  const [sideEffectOne, setSideEffectOne] = useState('Nausea');
  const [sideEffectTwo, setSideEffectTwo] = useState('Fever');
  const [sideEffectThree, setSideEffectThree] = useState('Headache');

  const [sideEffects, setSideEffects] = useState([
    sideEffectOne,
    sideEffectTwo,
    sideEffectThree
  ]);

  const [compositionItemOne, setCompositionItemOne] = useState('Glycerol');
  const [compositionItemTwo, setCompositionItemTwo] = useState('Methanol');
  const [compositionItemThree, setCompositionItemThree] =
    useState('Paracetamol');

  const [compositionItems, setCompositionItems] = useState([
    compositionItemOne,
    compositionItemTwo,
    compositionItemThree
  ]);


  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    console.log(accounts);
  };

  const submitHandler = async () => {
    // connectWallet();
    setCompositionItems([
      compositionItemOne,
      compositionItemTwo,
      compositionItemThree
    ]);
    setSideEffects(sideEffectOne, sideEffectTwo, sideEffectThree);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const SupplyChainContract = new ethers.Contract(
      '0xcaCB93B5E1b35CFF4b2aDfb538e29539243c554E',
      SupplyChain.abi,
      signer
    );
    const manDate = new Date(manufacturingDate);
    const expDate = new Date(expiryDate);
    setSideEffects([sideEffectOne, sideEffectTwo, sideEffectThree]);
    let view = await SupplyChainContract.getUserDetails(
      '0x474d4B268F28584179d12B7CCB7A8A886D5A0fd7'
    );
    console.log(view);
    const products = await SupplyChainContract.addProduct(
      [
        manufacturerName,
        manufacturerEmail,
        '0x474d4B268F28584179d12B7CCB7A8A886D5A0fd7',
        manDate.getTime(),
        expDate.getTime(),
        false,
        4000,
        productId,
        productImage,
        productType == 'Batch' ? 0 : 1,
        scientificName,
        usage,
        compositionItems,
        sideEffects
      ],
      manDate.getTime(),
      {
        gasLimit: 5000000
      }
    );
    console.log(
      manufacturerName,
      manufacturerName,
      '0x616225F50fA2b77F5e8e592468fa1cE37ba46a3a',
      manDate.getTime(),
      expDate.getTime(),
      false,
      4000,
      // 'SGXxdegshr54fsr',
      productId,
      productImage,
      productType,
      scientificName,
      usage,
      compositionItems,
      sideEffects
    );
    console.log('Manf Date', manDate.getTime());
    console.log('Exp Date', expDate.getTime()); //
  };

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
      <CardHeader title="Main Information" subheader="Add Product" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Manufacturer Name"
                variant="outlined"
                onChange={(e) => setManufacturerName(e.target.value)}
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
                onChange={(e) => setManufacturerEmail(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="date"
                label="Manufacturer Date"
                helperText="dd/MM/yyyy"
                type="datetime-local"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={(e) => setManufacturingDate(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="date"
                label="Expires In (days)"
                helperText="dd/MM/yyyy"
                type="datetime-local"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Product Name"
                onChange={(e) => setProductName(e.target.value)}
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
                onChange={(e) => setProductType(e.target.value)}
              >
                <MenuItem value="Individual">Individual</MenuItem>
                <MenuItem value="Batch">Batch</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Product ID"
                onChange={(e) => setProductId(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Product Image"
                helperText="Insert image URL"
                onChange={(e) => setProductImage(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <CardHeader title="General Information"></CardHeader>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="Type">Type</InputLabel>
              <Select
                labelId="Type"
                id="Type"
                label="Type"
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="Type 1">Type 1</MenuItem>
                <MenuItem value="Type 2">Type 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Scientific Name"
                onChange={(e) => setScientificName(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <TextField
                label={`Side Effect 1`}
                onChange={(e) => setSideEffectOne(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <TextField
                label={`Side Effect 2`}
                onChange={(e) => setSideEffectTwo(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <TextField
                label={`Side Effect 3`}
                onChange={(e) => setSideEffectThree(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <TextField
                label={`Composition 1`}
                onChange={(e) => setCompositionItemOne(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <TextField
                label={`Composition 2`}
                onChange={(e) => setCompositionItemTwo(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <TextField
                label={`Composition 1`}
                onChange={(e) => setCompositionItemThree(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                multiline
                maxRows={4}
                label={`Usage`}
                onChange={(e) => setUsage(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button sx={{ flex: 1 }} variant="outlined" onClick={submitHandler}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddProductForm;
