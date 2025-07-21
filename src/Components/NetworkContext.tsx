import React, { createContext, useContext, useEffect, useState } from "react";

interface NetworkContextProps{
    isOnline: boolean;
}

const NetworkContext = createContext<NetworkContextProps>({
    isOnline: true
});

export const NetworkProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return (
        <NetworkContext.Provider value={{ isOnline }}>
            {children}
        </NetworkContext.Provider>
    );
}

export const useNetworkStatus = () => useContext(NetworkContext);