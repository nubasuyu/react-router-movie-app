import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>    <h1 className="text-3xl font-bold mb-6 text-center">🎬 Nurudeen Movie App</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:title" element={<MovieDetails />} />
    </Routes>
    </>

  );
}

export default App;
