import './components/Navbar'
import './App.css'
import Navbar from './components/Navbar'
import ControlPanel from './components/ControlPanel'
import GradientCanvas from './gradient/GradientCanvas'
import { ControlPanelProvider } from './hooks/ControlProvider'

function App() {

  return (
    <>
      <Navbar />
      <ControlPanelProvider>
        <div className="w-full h-[calc(100% - 100px)] mt-[100px] flex justify-center  gap-10">
          <ControlPanel />
          <GradientCanvas />
        </div>
      </ControlPanelProvider>
    </>
  )
}

export default App
