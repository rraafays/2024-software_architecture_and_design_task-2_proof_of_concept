const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="gap-6 flex">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-150"
        >
          <option>Type</option>
          <option value={"games"}>Games</option>
          <option value={"books"}>Books</option>
          <option value={"films"}>Films</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="cat"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-150"
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-150"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div></div>
    </div>
  );
};

export default Filter;
