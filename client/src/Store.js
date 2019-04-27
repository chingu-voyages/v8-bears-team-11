import React, { useState } from "react";
import { fb } from ".";

export const UserContext = React.createContext();
export const VegetableContext = React.createContext();

const Store = ({ children }) => {
  const [user, setUser] = useState(fb.auth().currentUser.displayName);
  const [vegetable, setVegetable] = useState("Tomato");

  return (
    <UserContext.Provider value={[user, setUser]}>
      <VegetableContext.Provider value={[vegetable, setVegetable]}>
        {children}
      </VegetableContext.Provider>
    </UserContext.Provider>
  );
};

export default Store;
