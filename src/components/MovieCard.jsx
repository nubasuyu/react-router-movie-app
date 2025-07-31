import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to /movie/title and pass the movie data
    navigate(`/movie/${encodeURIComponent(movie.title)}`, { state: { movie } });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border p-4 rounded shadow hover:shadow-lg transition"
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
      <p className="text-gray-600 mt-1">Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
