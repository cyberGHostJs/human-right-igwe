import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/Footer.css";



const Footer = ()=>{
    return(
        <Row
        style={{ margin: "0", padding: "0" }}
        className="ten_jumbotronBackgroundColor"
      >
        <Col md="12" className="ten_jumbotron">
          <p
            className="text-center"
            style={{ marginTop: "1.2%", fontFamily: "sans-serif" }}
          >
            c 2022 The Associstion for the Protection and Defence of Human
            Rights All Rights Reserved
          </p>
        </Col>
      </Row>
    )
}


export default Footer;