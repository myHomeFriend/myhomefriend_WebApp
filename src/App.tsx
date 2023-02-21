import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import ScrollToTop from "./hooks/useScrollToTop";
import Routing from "./routing/Routing";

function App() {
  return (
    <div className="homesolutions">
      <ScrollToTop />
      <Header />
        <Routing/>
      <Footer/>
    </div>
     
  );
}

export default App;
