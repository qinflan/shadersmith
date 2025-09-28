import './components/Navbar'
import './App.css'
import Navbar from './components/Navbar'
import ControlPanel from './components/ControlPanel'
import GradientCanvas from './gradient/GradientCanvas'

function App() {

  return (
    <>
      <Navbar />

      <div className="w-full h-[calc(100% - 100px)] mt-[100px] flex justify-center items-center">
        <ControlPanel />
        <GradientCanvas />
      </div>

    </>
  )
}

export default App
