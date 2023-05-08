import React from "react";
import logo from "../images/section_number_bg.png";
import personAbout from "../images/person.png";
import "../styles/About.css";
import { Col, Image, Row } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";

const About = () => {
  let datas = {
    Para1:
      " We are a nonprofit, nongovernmental human rights organization. Our objective is to protect and defend human Rights violation by the governments, powerful individuals in the society, organisations, especially security agencies.",
    Para2:
      " We join forces with other international human Rights groups all over the world to protect human Rights of people around the world, to stand with victims and activists to prevent discrimination, to uphold political freedom, to protect people from inhuman conduct in war time and to bring offenders to justice. we organise seminars to educate people about their Fundamental Rights as contained in the manicipal and international laws and about their natural rights as human beings.",
  };
  return (
    <Row style={{ margin: "0", padding: "0" }} className="about_row" id="about">
      <Col lg="9" className="second_jumbotron">
        <div className="PageNumberContainer">
          <div className="PageNumberCoverDiv">
            {Numberings("SectionNumLogoAbout", "01", "SectionNumClassBlack")}
            <h1 className="second_jumbotron_head">
              <ReactTypingEffect
                speed={100}
                text={["Welcome to APDHR", "We Defend Human Rights"]}
                cursor="_"
              />
            </h1>
            <p className="second_jumbotron_FirstPara">{datas.Para1}</p>
            <p className="second_jumbotron_SecondPara">{datas.Para2}</p>
            <h3 className="founder_name">Bar. E.C Igweokolo</h3>
            <p className="founder_founder">Founder of APDHR</p>
          </div>
        </div>
        <Image
          src={personAbout}
          alt="personAbout"
          className="personAbout"
          height="100%"
        />
      </Col>
    </Row>
  );
};
export default About;
// ===REUSEABLE FOR PAGE NUMBERING=====
function Numberings(div_cover, num, num_class) {//NUM_CLASS IS THE PAGE NUMBER CLASS
  return (
    <div className={div_cover}>
      <Image src={logo} alt="PageNumber" />
      <span className={num_class}>{num}</span>
    </div>
  );
}
