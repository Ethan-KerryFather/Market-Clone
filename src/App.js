import React from "react";
import Header from "./components/Header";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import Prototypes from "./components/Prototypes";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
