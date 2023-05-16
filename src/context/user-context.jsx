// import { createContext, useContext, useState } from "react";

import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {

    const [userObj, setUserObj] = useState(null);

    return (
      <UserContext.Provider
        value={{
          userObj,
          setUserObj
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };

  const useUser = () => useContext(UserContext);

export { UserProvider, useUser };