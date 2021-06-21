import React from "react";

function NavBar() {
  const links = ["./home", "./about", "./projects"];

  return <nav>
    <a href={links[0]}>Home</a> 
    <a href={links[1]}>About</a> 
    <a href={links[2]}>ProjectList</a> 
    </nav>;
}

export default NavBar;
