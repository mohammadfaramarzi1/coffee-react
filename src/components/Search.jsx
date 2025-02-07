import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { handleQuery } from "../utils/products";

function Search({ setQuery, search, setSearch }) {
  const clickHandler = () => {
    setQuery((query) => handleQuery(query, { search }));
  };


  return (
    <div className="mb-10 mt-5 flex gap-x-2">
      <input
        type="text"
        placeholder="جستجوی محصول..."
        className="bg-brown-medium placeholder-brown-light rounded-md px-4 py-2 outline-none"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        onClick={clickHandler}
        className="bg-brown-medium rounded-md w-10 flex items-center justify-center"
      >
        <IoSearchSharp className="text-lg" />
      </button>
    </div>
  );
}

export default Search;
