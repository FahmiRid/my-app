import React from 'react';
import "semantic-ui-css/semantic.min.css";
import Sidebar from '../components/Sidebar';
import MainDash5 from '../components/MainDash/MainDash5';
import { Button, Card,} from "semantic-ui-react";
import "../styles/admin1.css";

export default function Success() {

  // const sendMessagetoSuccessful = () => {
  //   const message = "done";
  //   window.ReactNativeWebView && window.ReactNativeWebView.postMessage(message);
  //   console.log("received", message);
  // };

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash5 />
      </div>
    </div>
  //   <div className="center"> 
  //   <Card.Group>
  //     <Card className="cards">
  //       <Card.Content>
  //         <Card.Header>Successful! 🥳</Card.Header>
  //         <Card.Description>
  //           <strong></strong>
  //         </Card.Description>
  //       </Card.Content>
  //       <Card.Content extra>
  //         <div className="ui two buttons">
  //           <Button basic color="green" onClick={sendMessagetoSuccessful}> 
  //             Done
  //           </Button>
  //         </div>
  //       </Card.Content>
  //     </Card>
  //   </Card.Group>
  // </div>
  );
}
