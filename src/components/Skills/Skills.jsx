import React from 'react';
import './style.css'
import Container from '../Container';

// import { Container, Row, Col } from 'react-bootstrap';
function Skills(){
    return(
        
    <div className="row" size="md-12" >
      <div className="col" size="md-4">
            <h3>Programming Languages:</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="col" size="md-4">
        
            <ul>
            <li>User experience design,</li>
                <li>How to create a professional project</li>
                <li>Deployment</li>
                <li>Behaviour-driven development</li>
                <li>Test-driven development</li>
                <li>Object-oriented programming</li>
              
            </ul>
          </div>
          <div calssName="col" size="md-4">
          <h3>Libraries:</h3>
            <ul>
            <li>Bootstrap</li>
              <li>The DOM</li>
              <li>APIs</li>
              <li>JQuery</li>
              <li>JSON</li>
              <li>AJAX</li>
              <li>Node.js</li>
              <li>ES6</li>
              <li>React</li>    
            </ul> 
        </div>

</div>
    );
}
 export default Skills;
// import React from 'react';

// class Skills extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <h3>Programming Languages:</h3>
//             <ul>
//               <li>HTML</li>
//               <li>CSS</li>
//               <li>JavaScript</li>
//             </ul>
//           </div>
//           <div className="col">
//             <h3>Libraries:</h3>
//             <ul>
//               <li>Bootstrap</li>
//               <li>The DOM</li>
//               <li>APIs</li>
//               <li>JQuery</li>
//               <li>JSON</li>
//               <li>AJAX</li>
//               <li>Node.js</li>
//               <li>ES6</li>
//               <li>React</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Skills;
