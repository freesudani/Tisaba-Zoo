import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import Animals from "./components/Animals";
import Footer from "./components/Footer";
import Booking from "./components/Booking";

const Section = styled.section`
  overflow-x: hidden;
`;

function App() {
  let location = useLocation();
  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
        </Switch>
      </AnimatePresence>
      <Animals />
      <Booking />
      <Footer />
    </Section>
  );
}

export default App;
