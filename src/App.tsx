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
          <div className="mt-[50px] mb-[50px]">
            <p className="font-['helvetica-neue-lt-pro'] text-2xl font-normal tracking-tight">this is a demo, npm package + code generation for art coming soon...</p>
          </div>
    </div>
  )
}

export default App
