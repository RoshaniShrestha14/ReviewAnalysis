import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="site-title">
        <img src="/logo.png" alt="Logo" className="logo" />
        RevAI
      </NavLink>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Analyzer">Analyzer</NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// import React from 'react'
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="nav">
//       <a href="/" className="site-title">
//         {/* <img src="/path/to/logo.png" alt="Logo" /> */}
//         Site Name
//       </a>
//       <ul>
//         <li>
//           <a href="/Home">Home</a>
//         </li>
//         <li>
//           <a href="/Analyzer">Analyzer</a>
//         </li>
//         <li>
//           <a href="/Dashboard">Dashboard</a>
//         </li>
//         <li>
//           <a href="/Insight">Insight</a>
//         </li>
//         <li>
//           {" "}
//           <a href="/AnalyzeAReview">Analyze a Review</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar
