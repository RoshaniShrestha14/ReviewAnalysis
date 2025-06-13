import "@fontsource/inter"; // Defaults to 400 weight
import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import KeyFeatures from "./components/KeyFeatures";
import HowItWorks from "./components/HowItWorks";
import ReminderAnalyze from "./components/ReminderAnalyze";
import AboutUs from "./components/AboutUs";
import AboutUsMission from "./components/AboutUSMission";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <KeyFeatures></KeyFeatures>
      <HowItWorks></HowItWorks>
      <ReminderAnalyze></ReminderAnalyze>
      <AboutUs></AboutUs>
      <AboutUsMission></AboutUsMission>
    </div>
  );
}

export default App;
