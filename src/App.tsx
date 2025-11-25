import './components/Navbar'
import './App.css'
import Navbar from './components/Navbar'
import ControlPanel from './components/ControlPanel'
import GradientCard from './gradient/GradientCard'

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center bg-background">
      <Navbar />
        <div className="flex flex-col-reverse w-[90%] md:flex-row mt-[100px] md:mt-[150px] justify-center gap-10">
          <ControlPanel />
          <GradientCard />
      </div>
          <div className="mt-[50px] mb-[50px] w-full">
            <p className="font-['helvetica-neue-lt-pro'] text-2xl font-normal tracking-tight">this is a demo, npm package + code generation for art coming soon...</p>
          </div>
    </div>
  )
}

export default App
