
import Accordion from './Components/Accordion/Accordion';
import AccordionSection from './Components/Accordion/AccordionSection';

import './App.css';
function App() {
  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <h1>Accessible React Accordion</h1>
      </header>
      <main>
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
      
      </main>
    </div>
  );
}

export default App;
