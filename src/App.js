import './App.css';
import Weather from './Weather';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!!!</h1>
        <Weather city="Paris" />

      </header>
    </div>
  );
}


export default App;
