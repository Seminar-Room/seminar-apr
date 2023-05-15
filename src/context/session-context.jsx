// import { createContext, useContext, useState } from "react";

import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {

    const [sessionStream, setSessionStream] = useState({});

    return (
      <SessionContext.Provider
        value={{
          sessionStream,
          setSessionStream
        }}
      >
        {children}
      </SessionContext.Provider>
    );
  };

  const useSession = () => useContext(SessionContext);

export { SessionProvider, useSession };