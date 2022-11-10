import Movie from "./Movie";
import FlipMove from "react-flip-move";

const Movies = ({ movies }) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 flex-wrap justify-center">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
