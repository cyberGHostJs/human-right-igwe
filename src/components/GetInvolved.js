import React from "react"
import {  Col, Row, Button } from "react-bootstrap";
import "../styles/GetInvolved.css";





const GetInvolved = ()=>{

    return (
        <Row
        style={{ margin: "0", padding: "0" }}
        className="fifthJumbotronBackGroundImage"
      >
      <style type="text/css">
        {`
.btn-unflat {
    color: white;
    padding: 1.2% 3%;
    font-size: 14px;
    opacity: 200;
    border-radius: 0;
    font-weight: 900;
    transition: 0.5s;
    font-family: sans-serif;
    background-color: #2b272c !important;
    margin-top: 5%;
  }
  .btn-unflat:hover{
    color: white;
    background-color: #c9b776 !important;
  }
  @media screen and (max-width: 768px) {
    .btn-unflat {
        padding: 20px 35px;
        font-size: 14px;
      }
   }
  @media screen and (max-width: 480px) {
    .btn-unflat {
      padding: 20px 35px;
      font-size: 14px;
    }
   }
  `}
  </style>



        <Col md="12" className="fifth_jumbotron">
          <h1 className="fifth_jumbotronFirstHeader">
            11 Years+ of Experience in Various Cases
          </h1>
          <p className="fifth_jumbotronFirstPara">
            Advocating for Human Rights is Our Collective Responsibility. Let's
            Create a Better Future for All
          </p>
          <Button
            className="fifth_jumbotronFirstBtn"
            as="input"
            type="button"
            value="GET INVOLVED / DONATE"
            variant="unflat"
          />
        </Col>
      </Row>
    )
}


export default GetInvolved;