import React from "react";
import { useNavigate } from "react-router-dom";
// import Sidebar from '../components/Sidebar';
import MainDash3 from "../components/MainDash/MainDash3";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Header } from "semantic-ui-react";
import "../styles/admin1.css";
import Logo from "../imgs/mbb.png";

export default function Admin3() {
  const navigate = useNavigate();

  const navigateToAdmin4 = () => {
    navigate("/admin4"); // Replace '/admin3' with the actual route to admin3.jsx
  };

  return (
    <div className="App">
      <div className="AppGlass">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>Maybank</span>
        </div>
        <MainDash3 />
      </div>
    </div>
    //   <div className="center">
    //   <Header as='h1'>Third Page</Header>
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
    //           <Button basic color="green" onClick={navigateToAdmin4}>
    //             Next
    //           </Button>
    //         </div>
    //       </Card.Content>
    //     </Card>
    //   </Card.Group>
    // </div>
  );
}
