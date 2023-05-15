// import { createContext, useContext, useState } from "react";

import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const MessageContext = createContext(null);

const MessageProvider = ({ children }) => {

    const [displayMessage, setDisplayMessage] = useState("");

    return (
      <MessageContext.Provider
        value={{
          displayMessage,
          setDisplayMessage
        }}
      >
        {children}
      </MessageContext.Provider>
    );
  };

  const useMessage = () => useContext(MessageContext);

export { MessageProvider, useMessage };