import React, { createContext, useState } from "react";

const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [wishlist, setWishList] = useState([]);

  const handleAddStock = (e) => {
    setWishList([...wishlist, e]);
    console.log(wishlist);
  };

  const handleDeleteStock = (e) => {
    let updatedList = wishlist.filter((data) => data !== e);
    setWishList(updatedList);
  };

  const value = { wishlist, handleAddStock, handleDeleteStock, setWishList };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
export { StoreContext, StoreContextProvider };
