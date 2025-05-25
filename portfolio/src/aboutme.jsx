import { Container, Row, Col } from 'react-bootstrap';
import "./aboutme.css";

const AboutMe = () => {
  return (
    <Container className="about-me-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="bubble">
            <h2 className="bubble-title">About Me</h2>
            <p className="bubble-content">
              Hi, I'm Tian! I am in electrical engineering while minoring in computing technology! I really enjoy coding, the languages I mostly code in
               are C/C++, Python, and Java! In my spare time, I really like music, both listening and performing. I also really enjoy playing video games
                and letting my mind roam free with art.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
