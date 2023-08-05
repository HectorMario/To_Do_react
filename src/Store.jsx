import { useState } from "react";
import React from "react";

export const context = React.createContext();

export const Store = ({children}) =>{
    const [modal, setModal] = useState(false);
    return (
      <context.Provider value={[modal, setModal]}>
        {children}
      </context.Provider>
    )
 }

