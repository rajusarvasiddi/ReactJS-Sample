import React, { useEffect, useState } from "react";
import { Alert, Slide, Box } from "@mui/material";

const NetworkStatus: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <Slide direction="down" in={isOffline} mountOnEnter unmountOnExit>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1400 }}>
        <Alert severity="error" variant="filled">
          You are offline. Check your internet connection. Some of the feautres may not work properly.
        </Alert>
      </Box>
    </Slide>
  );
};

export default NetworkStatus;
