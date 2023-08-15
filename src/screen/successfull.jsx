import React from 'react';
import "semantic-ui-css/semantic.min.css";
import { Button, Card,} from "semantic-ui-react";
import "../styles/admin1.css";

export default function Admin3() {

  const sendMessagetoSuccessful = () => {
    const message = "done";
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(message);
    console.log("received", message);
  };

  return (
    <div className="center"> 
    <Card.Group>
      <Card className="ui-cards">
        <Card.Content>
          <Card.Header>Successful! 🥳</Card.Header>
          <Card.Description>
            <strong></strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green" onClick={sendMessagetoSuccessful}> 
              Done
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
  );
}
