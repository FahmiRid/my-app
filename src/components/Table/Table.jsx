import  {React, useEffect} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import "./Table.css";

export default function BasicTable() {

  const navigate = useNavigate();
  const sendMessagetoReactNative = () => {
    const message = "password_buy";
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(message);
    console.log("received", message);
  };

  useEffect(() => {
    const handleMessageFromWebView = event => {
      // console.log("Received message from WebView:", event);
      if (event.data === "password_buy_AA") {
        //alert("Received message:" + JSON.stringify(event.data));
        navigate("/admin2");
      }
    };

    window.addEventListener("message", handleMessageFromWebView);

    // return () => {
    //   window.removeEventListener("message", handleMessageFromWebView);
    // };
  }, [navigate]);
  return (
      <div className="Table">
      <h3  style={{ color: 'black' }}>Place Order</h3>
      <Stack spacing={2} direction="row">
      <Button variant="outlined" style={{ color: 'green', borderColor: 'green' }} onClick={sendMessagetoReactNative}>
          Buy
        </Button>
        <Button variant="outlined" style={{ color: 'red', borderColor: 'red' }} onClick={sendMessagetoReactNative}>
          Sell
        </Button>
    </Stack>
      </div>
  );
}
