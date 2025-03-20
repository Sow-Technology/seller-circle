"use client";
import useScrollColor from "@/hooks/changeColorHook";
import { useDebounce } from "@/hooks/debaouncehook";
import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
const SearchBar = ({ setQuery, query }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  //@change md:justify-end mak eit previous look
  const isScrolled = useScrollColor(50); //@change the bacground color on scroll
  return (
    <div className="h-auto flex items-center justify-center ">
      <div className="relative w-full md:max-w-[600px]">
        <input
          type="text"
          className="border !border-gray-400 pr-4 w-full   py-3 px-5 rounded-full text-[18px] outline-none"
          placeholder="search here"
          value={query}
          onChange={handleChange}
        />
        <div className="absolute right-2 top-2 bottom-0">
          <Search sx={{ fontSize: "40px", color: "grey" }} />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
