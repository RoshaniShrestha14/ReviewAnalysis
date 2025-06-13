import "@fontsource/inter"; // Defaults to 400 weight
import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import KeyFeatures from "./components/KeyFeatures";
import HowItWorks from "./components/HowItWorks";
import ReminderAnalyze from "./components/ReminderAnalyze";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <KeyFeatures></KeyFeatures>
      <HowItWorks></HowItWorks>
      <ReminderAnalyze></ReminderAnalyze>
    </div>
  );
}

export default App;
