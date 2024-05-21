import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import EarthPlanet from '../components/Images/shot.jpg';
import Avatar from '../components/Images/Andreea.jpg';
import { FaHtml5, FaCss3, FaBootstrap, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiJqueryLogo } from "react-icons/di";
import { LuFileJson } from "react-icons/lu";
import { TbApi } from "react-icons/tb";
import { SiCodemirror } from "react-icons/si";
import './style.css'
import { right } from '@popperjs/core';

function About() {
  return (
    <div>
      <Hero backgroundImage= {EarthPlanet}>
        <Row>
          <Col size="md-6">
        <h1> Andreea Malaiasi</h1>
        <h2></h2>
        <span class="badge badge-pill badge-primary"><a href="https://www.linkedin.com/in/andreea-malaiasi-bb15aa235">Linkedin</a></span>
        <span class="badge badge-pill badge-secondary"><a href="https://github.com/Andreea-Lita">GitHub</a></span>
        </Col>
        <Col size="md-4">
        <img src={Avatar} alt="Andreea (Lita) Malaiasi" style= {{ width: 212, marginTop: 8 }}/>
        </Col>
        </Row>
      </Hero>
  <div className='otherInfo'>
    <Container>
      <p>Practicing web development on my portfolio!</p>
      <FaHtml5 color='darkcyan' size='21px' style={{marginRight:'10px'}} />
      <FaCss3 color='darkred' size='21px' style={{marginRight:'10px'}}/>
      <IoLogoJavascript color='purple' size='21px' style={{marginRight:'10px'}} />
      <FaBootstrap color='gray' size='21px' style={{marginRight:'10px'}} />
      < FaGithub color='black' size='21px' style={{marginRight:'10px'}} />
      <DiJqueryLogo color='red' size='21px' style={{marginRight:'10px'}} />
      <LuFileJson color='darkgreen' size='21px' style={{marginRight:'10px'}} />
      < FaReact color='yellow' size='21px' style={{marginRight:'10px'}} />
      <TbApi color='blue' size='21px' style={{marginRight:'10px'}} />
      <FaNodeJs color='pink' size='21px' style={{marginRight:'10px'}} />
      <SiCodemirror color='orange' size='21px' style={{marginRight:'10px'}} />
    </Container>
  </div>
    </div>
  );
}

export default About;