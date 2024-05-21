import Container from "../Container";
import "./style.css";
import React, { useEffect, useState } from 'react';
import portfCardData from "../../../data.json"

function Projects() {
  const [data, setData] = useState([]);
  
    // Store data to localStorage
  useEffect(() => {
      localStorage.setItem('portfCardData', JSON.stringify(portfCardData));
  }, []);
  
    // Retrieve data from localStorage
  useEffect(() => {
      const retrievedData = localStorage.getItem('portfCardData');
      const parsedData = JSON.parse(retrievedData);
      setData(parsedData);
  }, []);
  
  return (
    <section className="starting">
      <div>
        <Container>
        <br /> {/* This adds a line break after each item */}
  {data.map((item, index) => (
          <div key={index}>
  <h2>{item.name}</h2>
        <ul>
          <li>
            <a href={item.URL}>Project Link</a>
          </li>
          <li>
            <a href={item.githubURL}>GitHub Link</a>
          </li>
          <li>
            <img src={item.image} alt={item.name} style={{width:290}}/>
          </li>
        </ul>
        <br /> {/* This adds a line break after each item */}
        </div>
      ))}
      </Container>
    </div>
    </section>
  );
  }
  
  export default Projects;