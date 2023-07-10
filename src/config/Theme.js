import { createContext, useReducer } from "react";
const themeContext = createContext();
const defaultTheme = {
  theme: localStorage.getItem("theme") === "light" ? "light" : "dark",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.new };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, defaultTheme);

  const changeTheme = () => {
    dispatch({
      type: "CHANGE_THEME",
      new: todos.theme === "light" ? "dark" : "light",
    });
    localStorage.setItem("theme", todos.theme === "light" ? "dark" : "light");
  };

  return (
    <themeContext.Provider value={{ ...todos, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export default themeContext;
