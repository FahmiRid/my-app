import React, { useEffect } from "react";
import '../styles/admin1.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Image } from 'semantic-ui-react'

export default function Admin() {

  const sendMessagetoReactNative = () => {
    const message = "password_buy!";
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(message);
    console.log ("received!",message);
  }

  return (
    <div className="center">
    {/* <div className="border-box">
      <h1>First Page</h1>
      <Button
        onClick={sendMessagetoReactNative}
       
      >
        Buy 
      </Button>
      <Button
        onClick={sendMessagetoReactNative}
      >
        Sell
      </Button>
    </div> */}

<Card.Group>
    <Card>
      <Card.Content>
        {/* <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        /> */}
        <Card.Header>Foreign Currency</Card.Header>
        <Card.Meta>Total Invesment</Card.Meta>
        <Card.Description>
           <strong>RM45,000,00</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={sendMessagetoReactNative}>
            Buy
          </Button>
          <Button basic color='red' onClick={sendMessagetoReactNative}>
            Sell
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>

    </div>
  );
}
