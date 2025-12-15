import './components/Navbar'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ControlPanel from './components/ControlPanel'
import GradientCard from './gradient/GradientCard'
import Instructions from './components/Instructions'

function App() {

  return (
    <div className="flex flex-col items-center bg-background w-full [&::selection]:bg-foreground [&::selection]:text-background">
      <Navbar />
      <div className="w-[90%] max-w-[1400px] mx-auto items-center">
        <div className="flex flex-col-reverse w-full md:flex-row mt-[100px] md:mt-[150px] gap-10">
          <ControlPanel />
          <GradientCard />
      </div>
      <Instructions />
      </div>
      <Footer />
    </div>
  )
}

export default App
