import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MoviesDetails } from 'pages/MovieDetails';
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
        <Route path="/movies/:movieId/cast" element={<MoviesDetails />} />
        <Route path="/movies/:movieId/reviews" element={<MoviesDetails />} />
      </Routes>
    </Container>
  );
};
/* '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
/movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails. */

/* /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
/search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
/movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
/movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
/movies/get-movie-reviews запрос обзоров для страницы кинофильма. */
