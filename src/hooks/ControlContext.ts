import { createContext, useContext, useState } from "react"

type HSVA = {h: number, s: number, v: number, a: number};

interface GradientConfig {
    dimension: string,
    amplitude: number,
    animationSpeed: number,
    animationDuration: number,
    grain: number,
    preset: number,
    colors: HSVA[],
}

const ControlProvider = () => {


};

export default ControlProvider