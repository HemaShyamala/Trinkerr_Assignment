import React from "react";
import "./Home.css";
import ItemList from "./ItemList";
import SearchBar from "./SearchBar";
export default function Home() {
  return (
    <div className="wholeContainer">
      <SearchBar />
      <ItemList />
    </div>
  );
}
