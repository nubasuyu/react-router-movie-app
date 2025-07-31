import { useLocation, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.movie) {
    return <p className="text-center">Movie not found.</p>;
  }

  const { title, description, trailer } = state.movie;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="mb-4 text-gray-700">{description}</p>

      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          className="w-full h-96"
          src={trailer}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default MovieDetails;
