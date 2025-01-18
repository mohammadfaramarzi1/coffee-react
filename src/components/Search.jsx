import React from "react";

function Search() {
  return (
    <div className="mb-10 mt-5 flex gap-x-2">
      <input
        type="text"
        placeholder="جستجوی محصول..."
        className="bg-brown-medium placeholder-brown-light rounded-md px-4 py-2 outline-none"
      />
      <button className="bg-brown-medium rounded-md w-10">
        <svg className="text-brown-light w-8 h-8">
          <use href="#search"></use>
        </svg>
      </button>
    </div>
  );
}

export default Search;
