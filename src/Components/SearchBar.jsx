import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../Contexts/StoreContext";
import data from "../data.json";

import "./SearchBar.css";

export default function SearchBar() {
  const { handleAddStock, handleDeleteStock, wishlist } =
    useContext(StoreContext);
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    //   setSuggestion(updatedData);
  };
  useEffect(() => {
    let updatedData = data.filter((element) =>
      element[0].includes(query.toUpperCase())
    );
    setSuggestion(updatedData);
  }, [query]);

  return (
    <div>
      <div width="100%" className="inputDiv">
        <input
          type="text"
          id="input"
          placeholder="Search stocks..."
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <p
          onClick={() => {
            document.getElementById("input").value = null;
            handleChange({ target: { value: "" } });
          }}
        >
          <i class="fas fa-times"></i>
        </p>
      </div>

      <div
        className={query.length > 0 ? "containerSearch1" : "containerSearch2"}
      >
        {suggestion &&
          suggestion.map((el, i) => {
            return (
              <div key={i} className="card">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                  }}
                >
                  <h4
                    className={
                      (((el[1] - el[2]) / el[2]) * 100).toFixed(2) > 0
                        ? "profit"
                        : "loss"
                    }
                  >
                    {el[0].split("::")[0]}
                  </h4>
                  <p>{el[0].split("::")[1]}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "right",
                  }}
                >
                  <h4
                    className={
                      (((el[1] - el[2]) / el[2]) * 100).toFixed(2) > 0
                        ? "profit"
                        : "loss"
                    }
                  >
                    {el[1]}
                  </h4>
                  <p>{(((el[1] - el[2]) / el[2]) * 100).toFixed(2)}%</p>
                </div>

                <div className="addBtn">
                  {wishlist.includes(el) ? (
                    <button onClick={() => handleDeleteStock(el)}>
                      <i class="fas fa-trash"></i>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handleAddStock(el);
                      }}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
