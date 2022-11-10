import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

const Movie = ({ movie }) => {
  const IMG_API = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="p-2 cursor-pointer group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        alt="thumbnail"
        width={1920}
        height={1080}
        src={IMG_API + movie.backdrop_path || movie.poster_path}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 easy-in-out group-hover:font-bold">
          {movie.title || movie.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type} •`}{" "}
          {movie.release_date || movie.first_air_date} •{" "}
          <HandThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Movie;
