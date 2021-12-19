import React, { useContext } from "react";
import { StoreContext } from "../Contexts/StoreContext";
import "./ItemList.css";
export default function ItemList() {
  const { handleDeleteStock, wishlist, setWishList } = useContext(StoreContext);

  return (
    <>
      <div className="containerList1">
        <div>
          <h2>Wishlist</h2>
          <button
            onClick={() => {
              setWishList([]);
            }}
          >
            {" "}
            <i className="fas fa-trash">All</i>
          </button>
        </div>
        {wishlist.length ? (
          wishlist.map((el, i) => {
            return (
              <>
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
                    <button onClick={() => handleDeleteStock(el)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <>
            {" "}
            <img
              src="https://web.trinkerr.com/static/media/search.2876cbc7.png"
              alt="Empty"
              className="openImage"
            />
          </>
        )}
      </div>
    </>
  );
}
