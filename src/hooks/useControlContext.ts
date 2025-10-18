import { useContext } from "react";
import { ControlPanelContext } from "./ControlContext";
import type { ControlPanelContextType } from "./ControlProvider";

export const useControlContext = (): ControlPanelContextType => {
  const context = useContext(ControlPanelContext);
  if (!context) {
    throw new Error("useControlPanel must be used within a ControlPanelProvider");
  }
  return context;
};
