import { Route, Routes } from "react-router-dom";
import './App.css';
import Container from './components/Container';
import Navbar from './components/navbar/Navbar';
import MovieList from './pages/movielist/MovieList';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/MovieProject" element={ <Container />} />
        <Route path="/movielist" element={ <MovieList /> } />
      </Routes>

  
    </div>
  );
}

export default App;
