import { createContext, useContext } from "react";

// 1  = navigating forward  (home → services)  — new page enters from the right
// -1 = navigating backward (services → home)  — new page enters from the left
export const NavigationContext = createContext(1);
export const useNavigationDirection = () => useContext(NavigationContext);
