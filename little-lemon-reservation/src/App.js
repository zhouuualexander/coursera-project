import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Fragment } from "react";
function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
