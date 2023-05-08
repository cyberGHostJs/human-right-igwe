import React, { useState } from "react";
import {
  Button,
  Col,
  Image,
  Row,
  OverlayTrigger,
  Modal,
} from "react-bootstrap";
import logo from "../images/section_number_bg.png";
import Container from "react-bootstrap/Container";
import person from "../images/person2.jpg";
import "../styles/LatestNews.css";





const LatestNews = () => {
  return (
    <Row
      style={{ margin: "0", padding: "0" }}
      id="blog"
      className="eight_jumbotron "
    >
      <Col md="12" className=" eightJumbotronBackGroundImage">
        <div className="PageNumberLinkLine eightJumbotronBackGroundImage">
          {Numberings("SectionNumLogo", "03", "SectionNumClassBlack")}
          {Top(
            "Latest News",
            " ", //string to be displayed
            "text-center",
            "eightSectionHeader1",
            "eightSectionPara1"
          )}
          <LatestNewses />

          <div
            className="LatestnewsBtn_cover"
            style={{
              marginTop: "2%",
            }}
          >
            <Button
              // onClick={()=>{}} send path to latest news 
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

function LatestNewses() {
  const [showImg, setShowImg] = useState(false);

  const handleCloseImg = () => setShowImg(false);

  const handleShowImg = () => setShowImg(true);

  const [showImg2, setShowImg2] = useState(false);

  const handleCloseImg2 = () => setShowImg2(false);

  const handleShowImg2 = () => setShowImg2(true);

  const [showImg3, setShowImg3] = useState(false);

  const handleCloseImg3 = () => setShowImg3(false);

  const handleShowImg3 = () => setShowImg3(true);
  const images = [
    {
      //completed
      id: 1,
      src: person,
      alt: "Image 1",
      title: "Title  ",
      head: "Nigeria navy on rampage, destroys civilians houses, forcefully posses their land and throw their families out to streets homeless.",
      description:
        "Navy personal armed , from the Navy Barracks at Ojo, with bulldozers, sledge hammers, and other heavy tools invaded civilian houses in the wee hours of the morning, demolished and destroyed about twelve buildings , comprising of nine bungalows and three one storey buildings owned by civilians ,members of Agboju-Oluti Residents stakeholders association. This destroyed buildings were leveled to the ground and the Nigeria Navy has since fenced the land where the demolished buildings were built and forcefully taken possession of the land. The innocent civilians whose houses were demolished and destroyed by Nigeria Navy, and their land forcefully taken possession of and rendered homeless, are now crying to the Federal government of Nigeria and human rights organisations for Justice. While the Nigeria Navy claimed that the occupied land upon which the civilians built their houses is Navy land, the Civilians, said the land belong to the Kuje Amuwo chieftaincy family from whom they bought the land and built their houses over twenty years ago and that they had lived there with their families without any let or hindrance until 2017 when the Nigeria Navy trespassed on their land. Kuje Amuwo family receipts which they used to purchase the land were shown to us and we interviewed two of the civilian victims of this Nigeria Navy savage, namely one Pastor Joackin Azubuike and Mr. Olokodana whose pictures are posted above. We also had them video recorded, narrating how the Nigeria Navy invaded their homes, violated their fundamental rights to dignity of human person, personal liberty, private and family life and forcefully disposed them of their interest in immovable properties. With the composite survey plan which was made available from the office of the Surveyor general of the federation, it was clear and without any equivocation that the Nigeria Navy unlawfully trespassed into their land, destroyed their properties, threw them ant their families out to the streets homeless and forcefully disposed them of their land. Pictures of the wanton destruction of the properties of these victims wrecked by the Nigeria Navy are posted below. In the 1999 Constitution of the Federal Republic of Nigeria and African Charter on human and people’s right, the rights of citizens to dignity of human person, personal liberty, private and family life and the right to own property is guaranteed. There is no justification for this barbaric action by the Nigeria Navy on Nigeria citizens, whose taxes are used to fund and pay the salaries of their personal.",
      link: "#",
      handleShowImg1: handleShowImg,
      alerts: "hi1",
      date: "October 25, 2017",
    },

    {
      //completed
      id: 2,
      src: person,
      alt: "Image 2",
      title: "Title",
      head: "armed soldiers shoot unarmed nigerian youths protesting police brutality and bad governance with life bullets.",
      description:
        "Association for the Protection and defence of human rights condenm in very strong terms the Nigeria Army  shooting and killing with life bullets unarmed Nigeria youths who were exercing their Constitutional right to protest Police brutality, killings  and bad governace at the Lekki toll gate in Lagos Nigeria . The Nigeria Youths throughout  Nigeria began a peaceful protest against the Nigeria Police force special  Anti Robbery Squad cslled SARS for their brutality and incessant extra judicial killings  which they demanded must be  addressed.  They demanded that the Federal government of Nigeria must disband the police notorous squad , should reform the Nigeria Police force and investigate cases of violations of human rights by the squad , with the view to prosecute any operative of the squad who has committed any offence and to compensate victims of such police brutality. The protest was a very popular movement because  over 80% of Nigeria youthe were involved all over the Country in the protest . Instead of the Federal government of Nigeria  to engage in a meaniful dialogue with the youths protesters,  on the 20th of October 2020 soldiers were deployed to attack and shoot them at very close range with life bullets with the aim to disperse them ,which resulted in many deaths and several others injured , which figures we are yet to ascertain.  I am aware that under the Nigeria Constitution,  the Nigeria Army main duty is to defend the Country against external aggression and can only be used to quell insurrection within the Country as provided by the clear provisions of the Constitution,  especially when there is a state of emergency.  There was no declaration of a state of emergency by the government when the Nigeria Army was deployed to unleash life bullets on this unarmed youths protesters , and murdered many in cold blood and maimed others.  This barbaric act , can not be tolerated  ,as it is a crime against humanity and amount genocide.",
      link: "#",
      handleShowImg1: handleShowImg2,
      alerts: "hi2",
      date: "october 20, 2020",
    },
    {
      //competed
      id: 3,
      src: person,
      alt: "Image 3",
      title: "Title 3",
      head: "Death in police custody: My father was beaten to death –Son",
      description:
        "On the 29th of August,2018, in the morning the youths of No 2 and 3 NRI st gathered to play football in front of our yard  where we normally play football as it have been a playground for us, why playing, the ball unintentionally fell into a neighboring church compound, so we went to get the ball from the church and meet the gateman whom we pleaded for him to give us our ball instead of listening to us, he started abusing us  which caused an exchange of words between us and the gateman, at that process the pastor’s daughter came into the scene and asked us to go and come back in few minutes to enable her talk to the gateman. We left and after 20-30 minutes we came  back to ask for the ball which turned out to an exchange of words between us and gateman before the pastor whose name is Joseph Nwakpakpa came out of the church gate to cause us(Bunch of useless fools) and we returned  the cause (fuck you) back to the pastor  and the members of his church and family came to sided him, the atmosphere became so tensed up that our elderly ones came to claim the Environment down and asked everyone of us playing the ball to go inside the house which we did, after then the atmosphere was claim, I was about boiling water to bath when two Royal Rangers from the church  which one of them is the pastor’s son by name Godswill Nwakpakpa  came and asked that they want to make peace with us and want us to plead with the pastor which none of us came out but after much plead with one of our neighbors, one of us came out and I joined him and went with them into the church, immediately after entering the church gate, a police woman whose name is Chidimma Alobu who is on maternity leave came into the gate with a handcuff, locked the gate, handcuffed us and started beating us all together with the royal rangers in the present of the pastor, neighbors outside heard our cries, peeped through the gate and saw what was happening called my father, when he came he saw what was happening and said why we are been treated like criminals, that if we have committed any crime that we should be taken to the police station, he was hitting the gate for them to open the gate, the police woman later opened the gate at that point and slapped him, on trying to slap him again, he defended himself and came to pull us out of the church premises on the process was pushed by the pastor’s daughter whose name   is Mrs. Nnenna,  my father late Mr. Israel Inya Aluu was still insisting that we should go to the station why the policewoman refused to go, after much pressure we were  taken to the  kpirikpiri station  on foot with the accusation that we were  stoning the church building, we were tortured on the road to the station. On getting to the station the pastor and his family were already there. Me and my mate was locked at the counter and that my father should also be arrested before my late father was called to the DPO office by another police officer which he went, after some minutes I was released and asked to cum get his body out of the DPO’s office, on getting to the DPO’s office I saw him unconscious with white foaming substance coming out of his mouth, I refused to touch his body insisting that they should tell me what happened to my father but I was force by the DPO to get his body out of the station to the hospital on tricycle, which I did  with my mate, when we got to the hospital, two doctors confirmed he was already dead, at that point he was still on the tricycle, I took him back to the station and left his body for the police. The police station where it happened is kpirikpiri Police and the church is Assemblies of God church, No 4 NRI st Abakaliki, Ebonyi state.",
      link: "#",
      handleShowImg1: handleShowImg3,
      alerts: "hi3",
      date: "August 29, 2018",
    },
    // Add more images as needed
  ];

  const News1 = images.find((obj) => obj.id === 1);
  const News2 = images.find((obj) => obj.id === 2);
  const News3 = images.find((obj) => obj.id === 3);

  function Truncate(str) {
    return str.length > 100 ? str.substring(0, 115) + "..." : str;
  }
  function TruncateHeader(str) {
    return str.length > 10 ? str.substring(0, 60) + "..." : str;
  }
  function UpperCase(str) {
    return str.toUpperCase();
  }

  function InitialCaps(str) {
    const arr = str.split(" ");

    //loop through each element of the array and capitalize the first letter.
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    const str2 = arr.join(" ");
    return str2;
  }

  return (
    <Container>
      <Row>
        {Modal_read(
          showImg,
          handleCloseImg,
          InitialCaps(News1.head),
          News1.description
        )}
        {Modal_read(
          showImg2,
          handleCloseImg2,
          InitialCaps(News2.head),
          News2.description
        )}
        {Modal_read(
          showImg3,
          handleCloseImg3,
          InitialCaps(News3.head),
          News3.description
        )}
        {images.map((image) => (
          <Col
            key={image.id}
            sm={6}
            md={3}
            lg={4}
            className="eightLatestNews"
            style={{
              padding: "0",
              boxShadow:
                " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <OverlayTrigger
              placement="bottom"
              overlay={
                <p
                  style={{
                    fontSize: "1.2em",
                    fontWeight: "bold",
                    width: "26.8%",
                    backgroundSize: "cover",
                    textAlign: "center",
                  }}
                >
                  {/* {image.title} */}
                </p>
              }
            >
              {/* <a href={image.link}> */}
                {/*have to add an onclick here that takes us to the blog posts section*/}
                <Image src={image.src} alt={image.alt} fluid  onClick={image.handleShowImg1} style={{cursor:'pointer'}}/>
              {/* </a> */}
            </OverlayTrigger>
            <div
              className="latestNewsDescription"
              onClick={image.handleShowImg1}
            >
              <h6 className="latestNewsDescriptionDate">
                {UpperCase(image.date)}
              </h6>
              <h5 className="latestNewsDescriptionHeader">
                {TruncateHeader(InitialCaps(image.head))}
              </h5>
              <p style={{ color: "grey", fontFamily: "sans-serif" }}>
                {Truncate(image.description)}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
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


export default LatestNews;
