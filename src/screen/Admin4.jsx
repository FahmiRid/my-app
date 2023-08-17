import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
// import Sidebar from "../components/Sidebar";
import MainDash4 from "../components/MainDash/MainDash4";
import { Button, Card, Header } from "semantic-ui-react";
import "../styles/admin1.css";
import Logo from "../imgs/mbb.png";

export default function Admin4() {
  // const navigate = useNavigate();
  // const sendMessagetoReactNative = () => {
  //   const message = "password_confirm";
  //   window.ReactNativeWebView && window.ReactNativeWebView.postMessage(message);
  //   console.log("received", message);
  // };

  // useEffect(() => {
  //   const handleMessageFromWebView = event => {
  //     // console.log("Received message from WebView:", event);
  //     if (event.data === "password_confirm_AA") {
  //       // alert("Received message:" + JSON.stringify(event.data));
  //       navigate("/success");
  //     }
  //   };

  //   window.addEventListener("message", handleMessageFromWebView);

  //   // return () => {
  //   //   window.removeEventListener("message", handleMessageFromWebView);
  //   // };
  // }, [navigate]);

  return (
    <div className="App">
      <div className="AppGlass">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>Maybank</span>
        </div>
        <MainDash4 />
      </div>
    </div>
    //   <div className="center">
    //   <Header as='h1'>Confirmation Page</Header>
    //   <Card.Group>
    //     <Card className="cards">
    //       <Card.Content>
    //         <Card.Header>Foreign Currency</Card.Header>
    //         <Card.Meta>Total Invesment</Card.Meta>
    //         <Card.Description>
    //           <strong>RM45,000,00</strong>
    //         </Card.Description>
    //       </Card.Content>
    //       <Card.Content extra>
    //         <div className="ui two buttons">
    //           <Button basic color="green" onClick={sendMessagetoReactNative}>
    //             Confirm
    //           </Button>
    //         </div>
    //       </Card.Content>
    //     </Card>
    //   </Card.Group>
    // </div>
  );
}
