import { React } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Card } from "semantic-ui-react";
import "../styles/admin1.css";

export default function Successfull() {
const sendMessagetoSuccessful = () => {
    const message = "done";
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(message);
    console.log("received", message);
  };

  return (
    <div className="center">
      {/* <Header as='h1'>Successful Page</Header> */}
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>successful ! 🥳</Card.Header>
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
