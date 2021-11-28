
import Accordion from './Components/Accordion/Accordion';

import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Accessible React Accordion</h1>
      </header>
      <main>
        <Accordion>
        <div label="Alligator Mississippiensis">
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
        </div>
        <div label="Alligator Sinensis">
          <p>
            <strong>Common Name:</strong> Chinese Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Eastern China
          </p>
          <p>
            <strong>Endangered Status:</strong> Critically Endangered
          </p>
        </div>
      </Accordion>
      <h2>Allow Multiple Open + Open Section By Default</h2>
      <Accordion allowMultipleOpen>
        <div label="Alligator Mississippiensis" isOpen>
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
        </div>
        <div label="Alligator Sinensis">
          <p>
            <strong>Common Name:</strong> Chinese Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Eastern China
          </p>
          <p>
            <strong>Endangered Status:</strong> Critically Endangered
          </p>
        </div>
      </Accordion>
      </main>
    </div>
  );
}

export default App;
