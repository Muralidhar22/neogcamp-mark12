import './App.css';
import { Routes, Route} from "react-router-dom";
import IsTriangle from './components/IsTriangle';
import Quiz from './components/Quiz';
import Hypotenuse from './components/Hypotenuse';
import Area from './components/Area';
import Navigation from './components/Navigation';

function App() {
  return (
      <div className='app'>
        <Navigation />
        <Routes>
          <Route path="/" element={<IsTriangle />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/hypotenuse" element={<Hypotenuse />} />
          <Route path="/area" element={<Area />} />
        </Routes>
        <main>
          
        </main>
        </div>
  );
}

export default App;
