import React from "react";

export default function admin() {

  const sendMessagetoReactNative = () => {
    window.ReactNativeWebView.postMessage("password_buy!");
    console.log("meessage ==> ", sendMessagetoReactNative);
  }
  return (
    <div className="flex justify-center items-center h-screen">
        <h1>First Page</h1>
      <button onClick={sendMessagetoReactNative} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Buy Sell
      </button>
    </div>
  );
}
