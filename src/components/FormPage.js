import React, { useState } from "react";
import { Row, Col, Button, Image, Form } from "react-bootstrap";
import logo from "../images/section_number_bg.png";

import person from "../images/person2.jpg";
import "../styles/Form.css";
import { firestore } from "./firebase";

const FormPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
    purpose: "message purpose",
    // Add more fields here...
  });

  const handleChange = (event) => {
    // can be moved to utilities
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleChange = (setterFunction) => (event) => {
  //   setterFunction(event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Access form data from the formData state
    console.log(formData);
    // You can now send this data to a backend server or perform other actions
    try {
      // Create a new FormData entry in Firestore
      await firestore.collection("siteFormData").add({
        siteFormData: formData,
      });

      // Clear the FormData details input
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        message: "",
        purpose: "message purpose",
        // Reset other fields as needed
      });
    } catch (error) {
      console.error("Create FormData error:", error);
      // Handle create hospital error and display an error message
    }
  };

  return (
    <Row
      style={{ margin: "0", padding: "0" }}
      id="contact"
      className="seventh_jumbotron "
    >
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
          <Row style={{ margin: "0" }}>
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

              {/* //---------------------------------form------------------------------------------- */}
              <Form onSubmit={handleSubmit} className="contact_form">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your E-Mail"
                      style={{ outline: "none" }}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Control
                      name="phone"
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Select
                      name="purpose"
                      placeholder="Message Purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                    >
                      <option>Message Purpose</option>
                      <option>Report Human right abuse</option>
                      <option>Get involved/ Donate</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Form.Control
                  name="message"
                  as="textarea"
                  placeholder="Your Message"
                  style={{ height: "15px" }}
                  value={formData.message}
                  onChange={handleChange}
                />
                <div className="FormButtonCover">
                  <Button
                    variant="formSubmit"
                    type="submit"
                    as="input"
                    value="SEND REQUEST"
                    style={{ width: "100%", padding: "5%" }}
                  />
                </div>
              </Form>
              {/* //---------------------------------form------------------------------------------- */}
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
