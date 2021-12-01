
import Accordion from './Components/Accordion/Accordion';
import AccordionSection from './Components/Accordion/AccordionSection';

import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Accessible React Accordion</h1>
      </header>
      <main>
        <Accordion>
        <AccordionSection label="Alligator Mississippiensis">
          <p>
            <strong>Common Name:</strong> American Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Texas to North Carolina, United
            States
          </p>
          <p>
            <strong>Endangered Status:</strong> Currently Not Endangered
          </p>
        </AccordionSection>
        <AccordionSection label="Mississippiensis Lambaa">
          <p>
            <strong>Common Name:</strong> American Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Texas to North Carolina, United
            States
          </p>
          <p>
            <strong>Endangered Status:</strong> Currently Not Endangered
          </p>
        </AccordionSection>
        <AccordionSection label="Alligator Sinensis">
          <p>
            <strong>Common Name:</strong> Chinese Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Eastern China
          </p>
          <p>
            <strong>Endangered Status:</strong> Critically Endangered
          </p>
        </AccordionSection>
      </Accordion>
      
      </main>
    </div>
  );
}

export default App;
