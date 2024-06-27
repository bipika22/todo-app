// import { useState } from "react";
//function based
//class based
// uncontrolled component
//controlled component

interface SearchProps {
  search: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Search(props: SearchProps) {
  const { search, handleChange } = props;
  return (
    <div>
      <input
        type="text"
        className="border rounded py-2 px-3"
        value={search}
        onChange={handleChange}
        placeholder="Search"
      />
      <h1>Search Result {search}</h1>
    </div>
  );
}
