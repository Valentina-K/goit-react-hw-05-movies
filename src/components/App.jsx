import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MoviesDetails } from 'pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Container, Header, Link } from './App.styled';
export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
