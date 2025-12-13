import './components/Navbar'
import './App.css'
import Navbar from './components/Navbar'
import ControlPanel from './components/ControlPanel'
import GradientCard from './gradient/GradientCard'

function App() {

  return (
    <div className="flex flex-col items-center bg-background">
      <Navbar />
        <div className="flex flex-col-reverse w-[90%] md:flex-row mt-[100px] md:mt-[150px] justify-center gap-10">
          <ControlPanel />
          <GradientCard />
      </div>
    </div>
  )
}

export default App
