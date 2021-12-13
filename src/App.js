import Accordion from './Components/Accordion/Accordion';
import AccordionSection from './Components/Accordion/AccordionSection';
import Footer from "./Components/Footer/Footer";

import './App.css';
function App() {
  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <h1>Accessible React Accordion</h1>
        <a href="https://github.com/mirsujat/react-accordion" target="_blank" rel="noreferrer">Download Source Code</a>
      </header>
      <main>
        <section className="content">
          <h4>Default state open one section at a time</h4>
            <Accordion>
              <AccordionSection label="Section 1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet.
                </p>
              </AccordionSection>
              <AccordionSection label="Section 2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet.
                </p>
              </AccordionSection>
              <AccordionSection label="Section 3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet.
                </p>
              </AccordionSection>
        </Accordion>
        </section>
        <section className="content">
          <h4>multiSelect  open multiple section open at a time</h4>
          <Accordion multiSelect>
              <AccordionSection label="Section 1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet.
                </p>
              </AccordionSection>
              <AccordionSection label="Section 2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet.
                </p>
              </AccordionSection>
              <AccordionSection label="Section 3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet.
                </p>
              </AccordionSection>
        </Accordion>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
