import React, { useState } from "react";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Gallery from "../components/Gallery";
import LatestNews from "../components/LatestNews";

import { Carousel, Col, Container, Row, Button, Modal } from "react-bootstrap";
import ContactForm from "./FormPage";
import GetInvolved from "./GetInvolved";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";

const LandingCarousel = () => {
  const [show, setShow] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose3 = () => setShow3(false);

  const handleShow = () => setShow(true);
  const handleShow3 = () => setShow3(true);

  let datas = {
    head1: "The Associstion for the Protection and Defence of Human Rights",
    head2: "Our Background",
    para1:
      "According to Thomas Hobbs a great philosopher, man in his state of nature is like a state of war in which life is solitary, poor, nasty, brutish and short...",
    para2:
      "APDHR is a registered human right association in Nigeria, established in 2011, afflicted to several international human right organisation...",
  };
  let modal_read_data = {
    modHeading:
      "The Associstion for the Protection and Defence of Human Rights",
    modBody:
      "APDHR is a registered human right association in Nigeria, established in 2011, afflicted to several international human right organisation",

    modHeading3: "Our Background",
    modBody3:
      "Association For The Protection And Defence Of Human Rights is known for its accurate fact-finding, impartial reporting, effective use of media, and targeted advocacy, often in partnership with local human rights groups.",
  };
  let readMoreData = {
    one: 'According to Thomas Hobbs a great philosopher, man in his state of nature is like a state of war in which life is solitary, poor, nasty, brutish and short. For Rousseau another world famous philosopher, "man is born free but everywhere is in chain". Thomas Hobbs postulated that in order to escape such miserable life in the state of nature, people entered into a contract by surrendering their natural rights, with the exception of their rights to self preservation, to a person or group of people who remained sovereign and thus the state was born. Looking at the preamble to many nations constitution including Nigeria, one will agree with the social contract theory of Thomas Hobbs on how the modern city states emerged. For example the Preamble to the 1999 constitution of Nigeria which states thus , "we the people of Federal Republic of Nigeria, having and solemnly resolved to live in unity and harmony as one indivisible and indissoluble sovereign nation under God dedicated to the promotion of inter-Africa solidarity, world peace, international co-operation and understanding. And to provide for a constitution for the purpose of promoting the good government and welfare of all persons in our country on the principles of freedom, equality and justice and for the purpose of consolidating the unity of our people. Do, hereby make, enact and give to ourselves the following constitution. In chapter 4 of the 1999 constitution of the Federal Republic Of Nigeria, the law guarentee it\'s citizens right to life, right to dignity of human person, right to personal liberty, freedom of association, freedom of expression, right to fair hearing, right to aquire and own immovable and movable property anywhere in Nigeria, right to citizens privacy, homes, correspondences, freedom of thoughts, conscience and religion and so on. Nigeria as a member of the United Nations and the African Union ratified and domesticated the Universal declaration of human rights and the African charter on human and peoples rights as part of her laws. There are so many laws in Nigeria which provides remedy to the venurable ones in our society, like the child\'s right act, domestic violence laws which most often women and children are the victims and so on. The rate of human right violation in Nigeria and Africa is so alarming that something urgent has to be done. Extra judicial killings at the police stations and detention centers, illegal detention of persons by the security agencies beyound allowed period as provided in the constitutions, delayed trial of suspects in the courts, denaial of the right to fair hearing under harsh conditions and sometimes denial of rights of accused persons to brief and discuss with their lawyers and so on. There is a recent upsurge in domestic violence cases  , where women and children are victims and in the face of all these violations and abuses of human rights, many do not know their rights and how to seek remedy at appropriate quanters. Some do not have the finance and connection to fight for their rights. This is our core mandate, to fight for and defend those whose fundamental rights are violated, and or abused by the government, organizations, government agencies and powerful individuals in our society. Be part of the struggle to make the world a better place for all.',
    two: "Association For the Protection and Defence of human Rights (APDHR) is a registered human Rights Association in Nigeria, established in 2011, afflicted to several international human right organisations all over the world. Its staff consists of human Rights professionals, including country experts, Lawyers, Journalists, academics of diverse backgrounds and nationalities. The Association is known for its accurate fact finding, impartial reporting, effective use of media, and targeted advocacy often in partnership with local and foreign human rights group. Association for the protection and defence of human Rights meets with Governments, the International and Regional groups, Financial institutions and cooperations to press for changes in policy and practice that promote human rights and justice around te world. ",
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
                onClick={handleShow}
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
                onClick={handleShow3}
                as="input"
                type="button"
                value="READ MORE"
                variant="flat"
              />
            </Col>
            {Modal_read(
              show,
              handleClose,
              modal_read_data.modHeading,
              // modal_read_data.modBody
              readMoreData.one
            )}
            {Modal_read(
              show3,
              handleClose3,
              modal_read_data.modHeading3,
              // modal_read_data.modBody3
              readMoreData.two
            )}
          </Row>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

function Modal_read(show, handleClose, heading, body) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="ReadMoreModalHead">
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="ReadMoreModalBody">{body}</Modal.Body>
      <Modal.Footer className="ReadMoreModalFooter">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

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
