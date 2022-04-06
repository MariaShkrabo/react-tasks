import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({
    userId: 1,
    setUserId: () => {},
});

export const UserProvider = ( { children } ) => {
    const [userId, setUserId] = useState(1);
    const value = {userId, setUserId};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
