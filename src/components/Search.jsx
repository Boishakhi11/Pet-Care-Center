import React from "react";

const Search = () => {
  return (
    <div className="mt-10 space-y-4 mb-10">
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-4">
        Explore Winter Care Services
      </h1>
      <p className="text-center">
        Browse our top winter care services to keep your pets warm and happy.
        <br />
        Book the best service to ensure they stay cozy and healthy throughout
        the cold season.
      </p>
      <div className="flex justify-center items-center gap-3">
        <h1>Search by category: </h1>
        <div>
          <label className="select">
            <select>
              <option>Grooming</option>
              <option>Clothing</option>
              <option>Training</option>
              <option>Walking</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;
