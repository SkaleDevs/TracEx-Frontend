import React, { useEffect } from 'react';
import { ethers } from 'ethers';
import SupplyChain from '../../lib/SupplyChainAbi.json';

const TestWeb3 = () => {
  const addProduct = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const SupplyChainContract = new ethers.Contract(
      '0xc84C0272Ddced2502Cb257244Bc4EebE851bBcE1',
      SupplyChain.abi,
      signer
    );

  //   let products = await SupplyChainContract.addProduct([
  //     'Vaccine 1',
  //     'shreya',
  //     '0x474d4B268F28584179d12B7CCB7A8A886D5A0fd7',
  //     12345,
  //     12346,
  //     false,
  //     15000,
  //     'SGXxdegshrgfsr',
  //     'DHfgft',
  //     0,
  //     'fhcgfchd',
  //     'dghxfdxc',
  //     ['gdx', 'FHC'],
  //     ['GFc', 'hfdxc']
  //   ],123456,{gasLimit: 5000000});
  //   console.log(products);
  // };
    let view = await SupplyChainContract.getAllProducts();
    console.log(view);
  };
  // useEffect(() => {
  //   addProduct();
  // }, []);

  return <div><button onClick={addProduct}>Add</button></div>;
};

export default TestWeb3;
