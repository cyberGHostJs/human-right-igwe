import React from "react";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Gallery from "../components/Gallery";
import LatestNews from "../components/LatestNews";

import { Carousel, Col, Container, Row, Button } from "react-bootstrap";
import ContactForm from "./FormPage";
import GetInvolved from "./GetInvolved";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";



const LandingCarousel = () => {
  let datas = {
    head1: "The Associstion for the Protection and Defence of Human Rights",
    head2: "Our Background",
    para1:
      "According to Thomas Hobbs a great philosopher, man in his state of nature is like a state of war in which life is solitary, poor, nasty, brutish and short...",
    para2:
      "APDHR is a registered human right association in Nigeria, established in 2011, afflicted to several international human right organisation...",
  };

  return (
    <Carousel controls={false} fade>
      <Carousel.Item className="CarouselItem Carousel-image text-center">
        <div className="Carousel-image-overlay">
          <Row className="">
            <Col className="">
              <hr className="hr" />
            </Col>
          </Row>
          <Row className="Carousel-header-row">
            <Col lg={{ span: "12" }} className="Carousel-header-col">
              <h1 className="Carousel-header">{datas.head1}</h1>
            </Col>
          </Row>
          <Row className="Carousel-paragraph-row">
            <Col
              lg={{ span: "8", offset: "2" }}
              className="Carousel-paragraph-col"
            >
              <h5 className="Carousel-paragraph">{datas.para1}</h5>
            </Col>
          </Row>
          <Row className="Carousel-paragraph-row">
            <Col
              lg={{ span: "8", offset: "2" }}
              className="Carousel-button-col"
            >
              <Button
                // onClick={handleShow}
                as="input"
                type="button"
                value="READ MORE"
                variant="flat"
              />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      <Carousel.Item className="CarouselItem Carousel-image2 text-center">
        <div className="Carousel-image-overlay">
          <Row className="">
            <Col className="">
              <hr className="hr" />
            </Col>
          </Row>
          <Row className="Carousel-header-row">
            <Col lg={{ span: "12" }} className="Carousel-header-col">
              <h1 className="Carousel-header">{datas.head2}</h1>
            </Col>
          </Row>
          <Row className="Carousel-paragraph-row">
            <Col
              lg={{ span: "8", offset: "2" }}
              className="Carousel-paragraph-col"
            >
              <h5 className="Carousel-paragraph">{datas.para2}</h5>
            </Col>
          </Row>
          <Row className="Carousel-paragraph-row">
            <Col
              lg={{ span: "8", offset: "2" }}
              className="Carousel-button-col"
            >
              <Button
                // onClick={handleShow}
                as="input"
                type="button"
                value="READ MORE"
                variant="flat"
              />
            </Col>
          </Row>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

function Landing() {
  return (
    <Container fluid style={{ margin: "0", padding: "0" }}>
      <style type="text/css">
        {`
  .btn-flat {
    // text-align: center;
    left: 42%;
    right: 42%;
    margin: 0 auto;
    border: 3px solid green;
    position: absolute;
    bottom: 18%;
    // left: 43.5%;
    color: white;
    padding: 1.2% 3%;
    font-size: 14px;
    opacity: 999;
    border-radius: 0;
    font-weight: 900;
    transition: 0.5s;
    font-family: sans-serif;
    background-color: #c8ac48 !important;
    border: none;
  }
  .btn-flat:hover{
    color: white;
    background-color: #c9b776 !important;
  }
  @media screen and (max-width: 1024px) {
    .btn-flat {
      left: 34%;
      right: 34%;
      margin: 0 auto;
    padding: 19px 35px;
    font-size: 14px;
  }
  }
  @media screen and (max-width: 768px) {
    .btn-flat {
        left: 30%;
        right: 30%;
        margin: 0 auto;
      padding: 19px 35px;
      font-size: 14px;
    //   left: 40%;
    }
  }
  @media screen and (max-width: 480px) {
    .btn-flat {
        left: 20%;
        right: 20%;
        margin: 0 auto;
    }
  }
  @media screen and (max-width: 375px) {
    .btn-flat {

    }
  }
  `}
      </style>
      <Navigation />
      <LandingCarousel />
      <About />
      <Gallery />
      <LatestNews />
      <ContactForm />
      <GetInvolved />
      <ContactInfo />
      <Footer />
    </Container>
  );
}

export default Landing;
