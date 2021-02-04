import './App.css';
import { Router} from "@reach/router"
import { Home } from './components/HomePage'
import { RomanNumeral } from './components/RomanNumeralPage'
import { NotFound } from './components/NotFoundPage'

function App() {
  return (
    <Router>
      <Home path="/" />
      <RomanNumeral path="romannumeral" />
      <NotFound default />
    </Router>
  );
}

export default App;
