import React from "react";
import { useNavigate } from "react-router-dom";
import MainDash2 from "../components/MainDash/MainDash2";
import "../styles/admin1.css";
import Logo from "../imgs/mbb.png";
// import "semantic-ui-css/semantic.min.css";
// import { Button, Card, Header } from "semantic-ui-react";
// import Sidebar from "../components/Sidebar";

export default function Admin2() {
  // const navigate = useNavigate();

  // const navigateToAdmin3 = () => {
  //   navigate("/admin3"); // Replace '/admin3' with the actual route to admin3.jsx
  // };

  return (
    <div className="App">
      <div className="AppGlass">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>Maybank</span>
        </div>
        <MainDash2 />
      </div>
    </div>
    //   <div className="center">
    //   <Header as='h1'>Second Page</Header>
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
    //           <Button basic color="green" onClick={navigateToAdmin3}>
    //             Next
    //           </Button>
    //         </div>
    //       </Card.Content>
    //     </Card>
    //   </Card.Group>
    // </div>
  );
}
