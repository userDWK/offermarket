import React, { useState } from "react";
import Toaster from "./Toaster";

const ToasterContext = React.createContext({
  toast: [],
  setToasts: () => {},
});

const ToasterProvider = (props) => {
  const [toasts, setToasts] = useState([]);
  const addToast = (text) => {
    setToasts((prevToasts) => [text, ...prevToasts]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(0, prevToasts.length - 1));
    }, 3 * 1000);
  };

  return (
    <ToasterContext.Provider value={{ toasts, addToast }}>
      <>
        {props.children}
        <Toaster toasts={toasts} />
      </>
    </ToasterContext.Provider>
  );
};

export { ToasterContext, ToasterProvider };
