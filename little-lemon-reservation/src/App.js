import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Nav.css";
import Header from "./Header";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import Footer from "./Footer";
import { Fragment } from "react";
function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Router>
          <div>
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/booking">Booking</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/booking">
                <BookingPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
