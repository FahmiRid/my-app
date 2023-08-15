import React, { useEffect } from "react";

export default function Admin() {
  useEffect(() => {
    const eventListener = event => {
      const message = event.detail.message;
      console.log("Received message:", message);
    };

    // Add the event listener when the component mounts
    window.addEventListener("sendMessageToReactNative", eventListener);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("sendMessageToReactNative", eventListener);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const sendMessagetoReactNative = () => {
    const message = "password_buy!";
    
    // Create a custom event
    const event = new CustomEvent("sendMessageToReactNative", {
      detail: { message }
    });

    // Dispatch the event to the window object
    window.dispatchEvent(event);

    console.log("Message sent:", message);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <h1>First Page</h1>
      <button
        onClick={sendMessagetoReactNative}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buy Sell
      </button>
    </div>
  );
}
