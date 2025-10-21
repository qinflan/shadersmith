import { create } from "zustand";

type HSVA = {
  h: number;
  s: number;
  v: number;
  a: number;
}

interface ControlState {
    isSandboxMode: boolean;
    amplitude: number;
    animationSpeed: number;
    grain: number;
    hsva1: HSVA;
    hsva2: HSVA;
    hsva3: HSVA;
    hsva4: HSVA;
    hsva5: HSVA;

    setIsSandboxMode: (v: boolean) => void;
    setAmplitude: (v: number) => void;
    setAnimationSpeed: (v: number) => void;
    setGrain: (v: number) => void;
    setHsva1: (v: HSVA) => void;
    setHsva2: (v: HSVA) => void;
    setHsva3: (v: HSVA) => void;
    setHsva4: (v: HSVA) => void;
    setHsva5: (v: HSVA) => void;
}

export const useControls = create<ControlState>((set) => ({
    isSandboxMode: false,
    amplitude: 20,
    animationSpeed: 0.5,
    grain: 50,

    hsva1: { h: 186, s: 43, v: 100, a: 1 },
    hsva2: { h: 319, s: 21, v: 100, a: 1 },
    hsva3: { h: 198, s: 100, v: 93, a: 1 },
    hsva4: { h: 224, s: 46, v: 55, a: 1 },
    hsva5: { h: 40, s: 13, v: 100, a: 1 },

    setIsSandboxMode: (v) => set({ isSandboxMode: v }),
    setAmplitude: (v) => set({ amplitude: v }),
    setAnimationSpeed: (v) => set({ animationSpeed: v }),
    setGrain: (v) => set({ grain: v }),
    setHsva1: (v) => set({ hsva1: v }),
    setHsva2: (v) => set({ hsva2: v }),
    setHsva3: (v) => set({ hsva3: v }),
    setHsva4: (v) => set({ hsva4: v }),
    setHsva5: (v) => set({ hsva5: v }),

}));