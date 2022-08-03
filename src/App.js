import React from "react";
import Header from "./components/Header";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import Prototypes from "./components/Prototypes";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
