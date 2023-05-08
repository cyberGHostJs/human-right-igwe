import React from "react";
import {  Col, Row, Image } from "react-bootstrap";
import logo2 from "../images/logo-top.png";
import location from "../images/geo-alt-fill.svg";
import clock from "../images/clock.svg";
import email from "../images/envelope-fill.svg";
import phone from "../images/telephone-fill.svg";
import twiter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import "../styles/ContactInfo.css";




const ContactInfo = ()=>{
    return(
        <Row
        style={{ margin: "0", padding: "0" }}
        className="ninth_jumbotronBackGroundImage"
      >
        <Col md="12" className="ninth_jumbotron">
          <Row
            style={
              {
                // margin: "30px 78px",
                // textAlign: "left",
              }
            }
          >
            <Col
              lg="4"
              md="6"
              className="ninthJumbotronColCover" //on hover to make the img ease in and out is done here
            >
              <div className="spaceAround">
                <h2 className="ninthJumbotronColHeader1">
                  <Image src={logo2} alt="logo" /> <span> APDHR</span>
                </h2>
                <p className="ninthJumbotronColPara1">
                  APDHR is a global movement of people from diverse academics in
                  different countries and territories who campaign to end abuses
                  of human rights. We campaign for a world where human rights
                  are enjoyed by all.
                </p>
                <a
                  href="https://twitter.com/HumanRightsNig"
                  style={{ outline: "none", textDecoration: "none" }}
                >
                  {" "}
                  <Image
                    src={twiter}
                    alt="twitter"
                    style={{ marginRight: "5%" }}
                  />{" "}
                </a>
                <a
                  href="https://web.facebook.com/HumanRightsnig/"
                  style={{ outline: "none", textDecoration: "none" }}
                >
                  {" "}
                  <Image
                    src={facebook}
                    alt="facebook"
                    style={{ marginRight: "5%" }}
                  />{" "}
                </a>
              </div>
            </Col>
            <Col lg="4" md="6" className="ninthJumbotronColCover2">
              <div className="spaceAround">
                <h2 className="ninthJumbotronColHeader2">Get In Touch</h2>
                <p className="ninthJumbotronColPara2">
                  <Image
                    src={location}
                    alt="location"
                    style={{ marginRight: "5%" }}
                  />{" "}
                  281 old ojo RD. Amuwo odofin, Lagos.
                </p>
                <p className="ninthJumbotronColPara2">
                  <Image
                    src={email}
                    alt="email"
                    style={{ marginRight: "5%" }}
                  />{" "}
                  <a
                    href="mailto:ecigweokoloandco123@yahoo.com"
                    style={{ color: "grey" }}
                  >
                    ecigweokoloandco123@yahoo.com
                  </a>
                </p>
                <p className="ninthJumbotronColPara2">
                  <Image
                    src={phone}
                    alt="phone"
                    style={{ marginRight: "5%" }}
                  />{" "}
                  +234-803-840-7979, +234-803-840-7979
                </p>
                <p className="ninthJumbotronColPara2">
                  <Image
                    src={clock}
                    alt="clock"
                    style={{ marginRight: "5%" }}
                  />{" "}
                  24 hours a day, 7 days a week
                </p>
              </div>
            </Col>
            <Col lg="4" md="6" className="ninthJumbotronColCover3">
              <div className="spaceAround">
                <h2 className="ninthJumbotronColHeader3">Latest Tweets</h2>
                <p className="ninthJumbotronColPara">
                  {/* Ball tip boudin chicken, cetta bresaola doner prosciutto */}
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    )
}


export default ContactInfo;