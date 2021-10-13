import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App bg-black text-white min-h-screen py-16 lg:py-20">
      <Router>
        <Navbar />
        <Switch>
          <Route component={Home} exact path="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
