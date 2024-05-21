import React from 'react';
import './style.css'
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import EarthPlanet from '../Images/shot.jpg';
import Avatar from '../Images/avatar.jpg'

function Contact() {
  return (
    <div style={{ marginTop: 30, marginLeft: 200}}>
      
        {/* <h1></h1>
        <h2></h2> */}
        <span class="badge badge-pill badge-secondary"><a href="https://github.com/Andreea-Lita">GitHub</a></span>
        <br />
        <span class="badge badge-pill badge-primary"><a href="https://www.linkedin.com/in/andreea-malaiasi-bb15aa235">Linkedin</a></span>
        <br />
        <span class="badge badge-pill badge-secondary"><a href="https://mail.google.com/">myemail</a></span>
        {/* <a href="https://www.linkedin.com/in/andreea-malaiasi-bb15aa235">Linkedin</a>
        <br />
        <a href="https://github.com/Andreea-Lita">GitHub</a>*/}
        <br />
        {/* <a href="https://mail.google.com/">myemail</a>  */}
        {/* <p>Tel: </p> */}
        
        {/* <Container style={{ marginTop: 30 }}> */}
      <Container style={{ marginTop: 90 }}>
        <Row>
          <Col size="md-8">
          <h4>I am a person who likes coding, and mostly coding becoming eficcient for real life! I’ve recently embarked on a journey of web development, creating projects that bring ideas to life!</h4>

            <h4>Developing is also learnig for makeing ideeas a reality</h4>
          </Col>
          <Col size="md-4">
        <img src={Avatar} alt="close avatar" style= {{ width: 212, marginTop: 15 }}/>
        </Col>
        </Row>
        <Row>
          <Col size="md-12">
         
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
