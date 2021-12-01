
import Accord from './Components/Accordion/Accord';
import AccordionItem from './Components/Accordion/AccordionItem';

import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Accessible React Accordion</h1>
      </header>
      <main>
        <Accord>
        <AccordionItem title="Alligator Mississippiensis">
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
        </AccordionItem>
        <AccordionItem title="Mississippiensis Lambaa">
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
        </AccordionItem>
        <AccordionItem title="Alligator Sinensis">
          <p>
            <strong>Common Name:</strong> Chinese Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Eastern China
          </p>
          <p>
            <strong>Endangered Status:</strong> Critically Endangered
          </p>
        </AccordionItem>
      </Accord>
      
      </main>
    </div>
  );
}

export default App;
