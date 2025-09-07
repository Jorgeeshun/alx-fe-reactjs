import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="George" age="25" bio="Frontend developer who loves React and design." />
      <UserProfile name="Ama" age="30" bio="Traveler, foodie, and culture enthusiast." />
      <Counter/>
      <Footer />
    </div>
  );
}

export default App;
