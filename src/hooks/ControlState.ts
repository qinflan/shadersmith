import { createContext } from "react";

export type HSVA = {
  h: number;
  s: number;
  v: number;
  a: number;
}

export type ControlPanelStateType = {
  isSandboxMode: boolean;
  setIsSandboxMode: React.Dispatch<React.SetStateAction<boolean>>;
  amplitude: [];
  setAmplitude: React.Dispatch<React.SetStateAction<number[]>>;
  animationSpeed: number[];
  setAnimationSpeed: React.Dispatch<React.SetStateAction<number[]>>;
  grain: number[];
  setGrain: React.Dispatch<React.SetStateAction<number[]>>;
  hsva1: HSVA;
  setHsva1: React.Dispatch<React.SetStateAction<HSVA>>;
  hsva2: HSVA;
  setHsva2: React.Dispatch<React.SetStateAction<HSVA>>;
  hsva3: HSVA;
  setHsva3: React.Dispatch<React.SetStateAction<HSVA>>;
  hsva4: HSVA;
  setHsva4: React.Dispatch<React.SetStateAction<HSVA>>;
  hsva5: HSVA;
  setHsva5: React.Dispatch<React.SetStateAction<HSVA>>;
}

export const ControlPanelContext = createContext<ControlPanelStateType | undefined>(undefined);
