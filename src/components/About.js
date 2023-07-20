import React from "react";
import Links from "./Links"
import user from "../data/user"

function About(props) {
  let bioContent = null

  if (props.bio==" ") {
    bioContent=<p>{props.bio}</p>
 } 
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioContent}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default About;
