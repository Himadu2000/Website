import React from "react";
import Aboutme from "./components/Aboutme";
import Progress from "./components/Progress";
import Thanks from "./components/Thanksgiving";
import Donate from "./components/Donate";
import HelpUs from "./components/HelpUs";
import JoinUs from "./components/JoinUs";
import YourSkill from "./components/YourSkill";

const About = () => {
  return (
    <div>
      <Aboutme />
      <Donate />
      <HelpUs />
      <JoinUs />
      <YourSkill />
      <Progress />
      <Thanks />
    </div>
  );
};

export default About;
