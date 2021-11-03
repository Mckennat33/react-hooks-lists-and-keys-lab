import React from "react";
import Links from "./Links";


function NavBar(props) {
  const links = ["home", "about", "projects"];

  const listOfLinks = links.map((link) => { 
    <a key={link.toString()} href={ `#${link}` } > {link} </a>
  })

      return <nav>
      {listOfLinks}
      </nav>
  







}

export default NavBar;
