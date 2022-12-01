import React from 'react';
import { ethers } from 'ethers';
import SupplyChainAbi from '../../lib/SupplyChainAbi';

const web3 = new Web3(Web3.givenProvider);

const TestWeb3 = () => {
  const addProduct = async () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const SupplyChainContract = new ethers.Contract(
      '0x0978C8E89849a673BdE627A031574c048a4ac293',
      SupplyChainAbi,
      signer
    );

    // let products = await
  };

  return <></>;
};

export default TestWeb3;
