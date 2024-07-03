import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setToasts([]);
      }
    });
  });

  function createToast({ variant, message }) {
    setToasts([
      ...toasts,
      { id: crypto.randomUUID(), variant: variant, message: message },
    ]);
  }
  function dismissToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
