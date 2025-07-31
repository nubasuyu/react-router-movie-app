const Filter = ({ filterTitle, setFilterTitle, filterRating, setFilterRating }) => (
  <div className="flex gap-4 mb-6">
    <input
      type="text"
      placeholder="Filter by Title"
      value={filterTitle}
      onChange={(e) => setFilterTitle(e.target.value)}
      className="p-2 border rounded w-full"
    />
    <input
      type="number"
      placeholder="Filter by Rating"
      value={filterRating}
      onChange={(e) => setFilterRating(e.target.value)}
      className="p-2 border rounded w-full"
    />
  </div>
);

export default Filter;
