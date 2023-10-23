import { useState } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Home from './components/Home/Home';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [opacity, setOpacity] = useState(true)
  console.log(isLoading)

  setTimeout(() => {
    setIsLoading(true)
  }, 3000);

  setTimeout(() => {
    setOpacity(false)
  }, 3500);

  return (
    <div className="App">
      <LoadingScreen isLoading={isLoading} />
      <Home opacity={opacity} />
    </div>
  );
}

export default App;
