// src/components/TooltipButton.tsx
import { Button, Tooltip } from '@material-tailwind/react';
import type { TooltipStylesType } from "@material-tailwind/react";

const TooltipButton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Tooltip content="Click to submit!">
        {/* <Button children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Submit
        </Button> */}
      </Tooltip>
    </div>
  );
};

export default TooltipButton;
