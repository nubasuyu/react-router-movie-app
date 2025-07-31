import { useState } from "react";

const AddMovie = ({ onAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailer: ""
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.rating) return;
    onAdd({ ...newMovie, rating: parseFloat(newMovie.rating) });
    setNewMovie({ title: "", description: "", posterURL: "", rating: "", trailer: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} className="p-2 border rounded" />
        <input name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} className="p-2 border rounded" />
        <input name="rating" type="number" placeholder="Rating" value={newMovie.rating} onChange={handleChange} className="p-2 border rounded" />
        <input name="trailer" placeholder="Trailer Link (Embed)" value={newMovie.trailer} onChange={handleChange} className="p-2 border rounded" />
        <textarea name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} className="p-2 border rounded md:col-span-2" />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add Movie</button>
    </form>
  );
};

export default AddMovie;
