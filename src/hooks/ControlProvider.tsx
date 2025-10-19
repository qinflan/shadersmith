import { useState } from "react";
import type { ReactNode } from "react";
import { ControlPanelContext } from "./ControlContext";
import type { HSVA } from "./ControlContext";
export type { ControlPanelContextType } from "./ControlContext";

export const ControlPanelProvider = ({ children }: { children: ReactNode }) => {
  const [isSandboxMode, setIsSandboxMode] = useState<boolean>(false);
  const [amplitude, setAmplitude] = useState<number[]>([50]);
  const [animationSpeed, setAnimationSpeed] = useState<number[]>([50]);
  const [grain, setGrain] = useState<number[]>([50]);

  const [hsva1, setHsva1] = useState<HSVA>({ h: 186, s: 43, v: 100, a: 1 });
  const [hsva2, setHsva2] = useState<HSVA>({ h: 319, s: 21, v: 100, a: 1 });
  const [hsva3, setHsva3] = useState<HSVA>({ h: 198, s: 100, v: 93, a: 1 });
  const [hsva4, setHsva4] = useState<HSVA>({ h: 224, s: 46, v: 55, a: 1 });
  const [hsva5, setHsva5] = useState<HSVA>({ h: 40, s: 13, v: 100, a: 1 });

  return (
    <ControlPanelContext.Provider
      value={{
        isSandboxMode,
        setIsSandboxMode,
        amplitude,
        setAmplitude,
        animationSpeed,
        setAnimationSpeed,
        grain,
        setGrain,
        hsva1,
        setHsva1,
        hsva2,
        setHsva2,
        hsva3,
        setHsva3,
        hsva4,
        setHsva4,
        hsva5,
        setHsva5,
      }}
    >
      {children}
    </ControlPanelContext.Provider>
  );
};
