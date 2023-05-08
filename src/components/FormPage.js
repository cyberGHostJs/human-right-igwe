import React from "react";
import { Row, Col, Button, Image, Form } from "react-bootstrap";
import logo from "../images/section_number_bg.png";

import person from "../images/person2.jpg";
import "../styles/Form.css";

const FormPage = () => {
  return (
    <Row style={{ margin: "0", padding: "0" }} id="contact" className="seventh_jumbotron ">
            <style type="text/css">
        {`
  .btn-formSubmit {
    text-align: center;
    font-family: sans-serif;
    font-weight: 700;
    background-color: #c8ac48 !important;
    font-size: 90%;
    border: none;
  }
  .btn-formSubmit:hover{
    color: white;
    background-color: #c9b776 !important;
  }
  }
  `}
      </style>
      <Col md="12" className="seventh_jumbotronBackGroundImage">
        <div className="PageNumberLinkLine ">
          {Numberings("SectionNumLogo", "04", "SectionNumClasswhite")}
          <Row 
          style={{ margin: "0" }}
          >
            <Col lg="6">
              <Image
                className="seventhFormImg"
                src={person}
                alt="person"
                // style={{ marginLeft: "-3%" }}
              />
            </Col>
            <Col
              xs={{ order: "first" }}
              lg={{ span: "6", order: "last" }}
              // style={{ border: "1px solid white" }}
            >
              {Top(
                "Send Us a Message",
                "Human rights are not a privillage conferred by government. They are every human beings entitlement by virtue of being human.",
                "formTopCover",
                "formTopHeader",
                "formTopPara"
              )}
              <Form className="contact_form">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      type="email"
                      placeholder="Your E-Mail"
                      style={{ outline: "none" }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Control type="tel" placeholder="Your Phone" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Select placeholder="Message Purpose">
                      <option>Message Purpose</option>
                      <option>Report Human right abuse</option>
                      <option>Get involved/ Donate</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Form.Control
                  as="textarea"
                  placeholder="Your Message"
                  style={{ height: "15px" }}
                />
                <div className="FormButtonCover" >
                <Button
                  variant="formSubmit"
                  type="submit"
                  as="input"
                  value="SEND REQUEST"
                  style={{width: '100%', padding:'5%'}}
                />
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

function Top(head, body, col_class, h1_class, p_class) {
  return (
    <Row style={{ margin: "0", padding: "0" }}>
      <Col className={col_class}>
        <h1 className={h1_class}>{head}</h1>
        <p className={p_class}>{body}</p>
      </Col>
    </Row>
  );
}
function Numberings(div_cover, num, num_class) {
  return (
    <div className={div_cover}>
      <Image src={logo} alt="PageNumber" />
      <span className={num_class}>{num}</span>
    </div>
  );
}

export default FormPage;
