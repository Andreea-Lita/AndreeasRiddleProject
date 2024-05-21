
import React from 'react';
import './navstyle.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        // <div className='starter'>
        //     Home
        // </div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark position">
         <div class="container-fluid">
           <Link className="navbar-brand" to="/">
             Home
           </Link>
           <button
             class="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNav"
             aria-controls="navbarNav"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span class="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <NavLink
                   to="/contact"
                   end
                   className={({ isActive }) =>
                     isActive ? 'nav-link active' : 'nav-link'
                   }
                 >
                  More about me & Contact 
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   to="/cV"
                   className={({ isActive }) =>
                     isActive ? 'nav-link active' : 'nav-link'
                   }
                 >
                   CV
                 </NavLink>
               </li> 
               <li className="nav-item">
                 <NavLink
                   to="/projects"
                   className={({ isActive }) =>
                     isActive ? 'nav-link active' : 'nav-link'
                   }
                 >
                   Projects Gallery
                 </NavLink>
                 </li> 
               <li className="nav-item">
                 <NavLink
                   to="/skills"
                   className={({ isActive }) =>
                     isActive ? 'nav-link active' : 'nav-link'
                   }
                 >
                   Skills
                 </NavLink>
               </li> 
             </ul>
           </div>
         </div>
       </nav>
    );
}

export default Navbar;
