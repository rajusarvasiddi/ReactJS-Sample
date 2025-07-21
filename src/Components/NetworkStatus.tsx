import React, { useEffect, useState } from "react";
import { Alert, Slide, Box } from "@mui/material";
import { useNetworkStatus } from "./NetworkContext";

const NetworkStatus: React.FC = () => {
  const {isOnline} = useNetworkStatus();

  return (
    <Slide direction="down" in={!isOnline} mountOnEnter unmountOnExit>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1400 }}>
        <Alert severity="error" variant="filled">
          You are offline. Check your internet connection. Some of the feautres may not work properly.
        </Alert>
      </Box>
    </Slide>
  );
};

export default NetworkStatus;
