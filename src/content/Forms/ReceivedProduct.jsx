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
//import SupplyChain from '../../lib/SupplyChainAbi.json';
import * as PushAPI from "@pushprotocol/restapi";
import { NotificationItem, chainNameType } from "@pushprotocol/uiweb";

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


// channel private key
const PK = ''; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const ReceivedProduct = () => {
  
  const [barcodeID, setBarcodeID] = useState();

  const sendNotification = async() => {
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
          title: `right`,
          body: `okay`
        },
        payload: {
          title: `Goods have been rcevied`,
          body: `Barcode ID: ${barcodeID}`,
          cta: 'jk',
          img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fc_fill%2Cg_auto%2Cw_1200%2Ch_675%2Car_16%3A9%2Fhttps%253A%252F%252Fcdn.cnn.com%252Fcnnnext%252Fdam%252Fassets%252F210513120706-vitalik-buterin-file.jpg&imgrefurl=https%3A%2F%2Fwww.cnn.com%2F2021%2F05%2F20%2Finvesting%2Fvitalik-buterin-ethereum-billionaire%2Findex.html&tbnid=o4lgcR046Jc3VM&vet=12ahUKEwjmy93qgt77AhUdgmMGHSd7BYgQMygBegQIARA-..i&docid=kqZ5_MJwlce97M&w=1200&h=675&q=butalick&ved=2ahUKEwjmy93qgt77AhUdgmMGHSd7BYgQMygBegQIARA-'
        },
        recipients: address, // recipient address
        channel: '0x474d4B268F28584179d12B7CCB7A8A886D5A0fd7', // your channel address
        env: 'staging'
      });
      
      // apiResponse?.status === 204, if sent successfully!
      console.log('API repsonse: ', apiResponse);
    } catch (err) {
      console.error('Error: ', err);
    }
  }
   
    
    
   
  

  const submitHandler = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const SupplyChainContract = new ethers.Contract(
      '0xcaCB93B5E1b35CFF4b2aDfb538e29539243c554E',
      SupplyChain.abi,
      signer
    );
    console.log( barcodeID);
    // const userDetails = { name, email, address };
    let party = await SupplyChainContract.rec( barcodeID,new Date().getTime(), {
      gasLimit: 5000000
    });
    sendNotification();
    // let party = await SupplyChainContract.checkDeliv( barcodeID,new Date().getTime(), {
    //   gasLimit: 5000000
    // });
    console.log(party);
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
      <CardHeader title="Received product" />
      <CardContent>
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Barcode ID"
                variant="outlined"
                onChange={(e) => setBarcodeID(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={submitHandler}>
          Sell
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReceivedProduct;
