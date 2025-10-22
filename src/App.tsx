import './components/Navbar'
import './App.css'
import Navbar from './components/Navbar'
import ControlPanel from './components/ControlPanel'
import GradientCard from './gradient/GradientCard'

function App() {

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
        <div className="flex mt-[150px] justify-center gap-10">
          <ControlPanel />
          <GradientCard />
      </div>
    </div>
  )
}

export default App
