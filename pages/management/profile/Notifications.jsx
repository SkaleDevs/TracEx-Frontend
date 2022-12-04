import React, { useEffect ,useState} from 'react';
import { ethers } from 'ethers';
//import SupplyChain from '../../lib/SupplyChainAbi.json';
import * as PushAPI from "@pushprotocol/restapi";
import { NotificationItem, chainNameType } from "@pushprotocol/uiweb";

const PK = '42b561e5aefdebc06cce4f7fcfcac285f1aae57a2f8118bdde5a814eace910ba'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const Notifications = () => {

    const[notificatione,setnotificatione]=useState([]);
    useEffect(() => {
        const main = async() => {
            const notifications = await PushAPI.user.getFeeds({
              user: '0x474d4B268F28584179d12B7CCB7A8A886D5A0fd7', // user address in CAIP
              env: 'staging'
            });
          setnotificatione(notifications);
            // log the notifications 
            console.log('notifications: \n\n', notifications);
          }
          
          main();
    },[])
   
    
    
        return (<div>
        <div>
            <h1>What is the status of the delivery?</h1>
      {notificatione.map((oneNotification, i) => {
          const { 
              
              cta,
              title,
              message,
              app,
              icon,
              image,
              url,
              blockchain,
              notification,
              
          } = oneNotification;
      
          return (
              <NotificationItem
                 //key="yjhf" // any unique id
                  notificationTitle={title}
                  notificationBody={message}
                  cta={cta}
                  app={app}
                  icon={icon}
                  image={image}
                  url={url}
                  //theme={theme}
                  chainName={blockchain}
                  // chainName={blockchain as chainNameType} // if using Typescript
              />
              );
          })}
      </div></div>);

    };
    export default Notifications;