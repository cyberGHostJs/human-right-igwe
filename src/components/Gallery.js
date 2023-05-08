import React from "react";
import { Button, Col, Image, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import logo from "../images/section_number_bg.png";
import person from "../images/person2.jpg";
import "../styles/Gallery.css";




const Gallery = () => {
    let thirdata = {
        header: "Gallery",
        body: "Since 2011, we’ve been helping people claim their rights.",
      };

  return (
    <Row style={{ margin: "0", padding: "0" }} id="gallery" className="third_jumbotron "> 
      <Col md="12" className="thirdJumbotronBackGroundImage" >
        <div className="PageNumberLinkLine ">
          {/*---to see the right params. please see the last section of the code to find the full function------*/}
          {Numberings("SectionNumLogo", "02", "SectionNumClasswhite")}
          {Top(
            thirdata.header,
            thirdata.body,
            "text-center",
            "thirdSectionHeader1",
            "thirdSectionPara1"
          )}
          <ImageGallery />
          <div className="button_container">
            <Button
              // onClick={handleShow3}
              as="input"
              type="button"
              value="LOAD MORE"
              variant="load"
            />
          </div>
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
function ImageGallery() {
  const images = [
    {
      id: 1,
      src: person,
      alt: "Image 1",
      title: "Title 1",
      description: "Description 1",
      link: "https://www.example.com/image-1",
    },
    {
      id: 2,
      src: person,
      alt: "Image 2",
      title: "Title 2",
      description: "Description 2",
      link: "https://www.example.com/image-2",
    },
    {
      id: 3,
      src: person,
      alt: "Image 3",
      title: "Title 3",
      description: "Description 3",
      link: "https://www.example.com/image-3",
    },
    // Add more images as needed
  ];

  return (
    <Row style={{ margin: "0", padding: "0" }}>
      <style type="text/css">
        {`
          .galleryRow {
            /* border: 1px solid green; */
            width: 30%;
            height: max-content;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            margin: 1% auto;
            padding: 0;
          }
          .btn-load {
            // border: 5px solid green;
            color: white;
            width: 100%;
            font-size: 14px;
            border-radius: 0;
            font-weight: 900;
            transition: 0.5s;
            font-family: sans-serif;
            background-color: #c8ac48 !important;
            padding: 4% 7%;
          }
          .btn-load:hover{
            color: white;
            background-color: #c9b776 !important;
          }
          @media screen and (max-width: 768px) {
            .btn-load {
                padding: 6% 10%;
            }
          @media screen and (max-width: 480px) {
            .btn-load {
                padding: 8% 20%;
            }

            .galleryRow {
              /* border: 1px solid green; */
              width: 90%;
              margin: 3% auto;
            }
          }
  `}
      </style>
      {images.map((image) => (
        <Col key={image.id} sm={6} md={4} lg={4} className="galleryRow">
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip
                style={{
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                {image.title}
              </Tooltip>
            }
          >
            {/* <a href={image.link}> */}
            <Image src={image.src} alt={image.alt} fluid />
            {/* </a> */}
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}
export default Gallery;
