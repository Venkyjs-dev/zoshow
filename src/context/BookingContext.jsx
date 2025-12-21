import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  // Stores array of { slotDetails, configuration }
  const [cart, setCart] = useState([]);

  const addToCart = (slot, configuration) => {
    // Check if already added to avoid duplicates
    if (!cart.find((item) => item.id === slot.id)) {
      setCart((prev) => [...prev, { ...slot, configuration }]);
    }
  };

  const removeFromCart = (slotId) => {
    setCart((prev) => prev.filter((item) => item.id !== slotId));
  };

  const clearCart = () => setCart([]);

  return (
    <BookingContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </BookingContext.Provider>
  );
};