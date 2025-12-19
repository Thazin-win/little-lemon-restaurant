// import React from "react";
// import "./Nav.css";
// import logo from "../assets/logo4.png";

// const Nav = () => {
//   const [toggleMenu, setToggleMenu] = React.useState(false);
//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={logo} alt="app__logo" />
//       </div>
//       <ul className="app__navbar-links">
//         <li className="p__opensans">
//           <a href="#home">Home</a>
//         </li>
//         <li className="p__opensans">
//           <a href="#about">About</a>
//         </li>
//         <li className="p__opensans">
//           <a href="#menu">Menu</a>
//         </li>
//         <li className="p__opensans">
//           <a href="#awards">Awards</a>
//         </li>
//         <li className="p__opensans">
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//       <div className="app__navbar-login">
//         <a href="#login" className="p__opensans">
//           Log In / Registration
//         </a>

//         <a href="/" className="p__opensans">
//           Book Table
//         </a>
//       </div>
//       <div className="app__navbar-smallscreen">
//         {/*<GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />*/}
//         {toggleMenu && (
//           <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
//             {/*<MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />*/}
//             <ul className="app__navbar-smallscreen_links">
//               <li>
//                 <a href="#home" onClick={() => setToggleMenu(false)}>
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" onClick={() => setToggleMenu(false)}>
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#menu" onClick={() => setToggleMenu(false)}>
//                   Menu
//                 </a>
//               </li>
//               <li>
//                 <a href="#awards" onClick={() => setToggleMenu(false)}>
//                   Awards
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" onClick={() => setToggleMenu(false)}>
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Nav;

import React from "react";
import logo from "../assets/logo4.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <header>
        <nav className="navbar section-content">
          <a href="#" className="nav-logo">
            <img src={logo} alt="logo" />
          </a>
          <ul className="nav-menu">
            <button id="menu-close-button" class="fas fa-times"></button>
            <li className="nav-item">
              <a href="#" class="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" class="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#menu" class="nav-link">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="#reservations" class="nav-link">
                Reervations
              </a>
            </li>
            <li className="nav-item">
              <a href="#Order" class="nav-link">
                Order Online
              </a>
            </li>
            <li className="nav-item">
              <a href="#login" class="nav-link">
                Login
              </a>
            </li>
          </ul>
          <button id="menu-open-button" class="fas fa-bars"></button>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
