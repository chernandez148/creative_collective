import { useState } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [opacity, setOpacity] = useState(true);
  console.log(isLoading);

  setTimeout(() => {
    setIsLoading(true);
  }, 3000);

  setTimeout(() => {
    setOpacity(false);
  }, 3500);

  return (
    <div className="App">
      <LoadingScreen isLoading={isLoading} />
      <Home opacity={opacity} />
      <Navbar opacity={opacity} />
    </div>
  );
}

export default App;
