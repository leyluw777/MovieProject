import { Route, Switch } from 'react-router-dom';
import Swal from 'sweetalert2';
import './App.css';
import Container from './components/Container';
import Navbar from './components/navbar/Navbar';
import MovieList from './pages/movielist/MovieList';

function App() {

  const checkStatus = () => {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }

  if (!navigator.onLine) {
    checkStatus();
  }

  return (
    <div className="App">
      <Navbar />
      <Switch location={location} key={location.key}>      
          <Route exact path="/MovieProject" component={Container}></Route>
          <Route path="/movielist" component={MovieList}></Route>
        </Switch>

      {/* <Routes>
        <Route path="/" element={ <Container />} />
        <Route path="/movielist" element={ <MovieList /> } />
      </Routes> */}

    </div>
  );
}

export default App;
