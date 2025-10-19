import './components/Navbar'
import './App.css'
import Navbar from './components/Navbar'
import ControlPanel from './components/ControlPanel'
import GradientCard from './gradient/GradientCard'
import { ControlPanelProvider } from './hooks/ControlProvider'

function App() {

  return (
    <>
      <Navbar />
      <ControlPanelProvider>
        <div className="w-full h-[calc(100% - 100px)] mt-[100px] flex justify-center  gap-10">
          <ControlPanel />
          <GradientCard />
        </div>
      </ControlPanelProvider>
    </>
  )
}

export default App
