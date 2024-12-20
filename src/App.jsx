import { useState } from 'react'
import Top from "./components/Top"
import { Navbar } from './components/Top'
import Showcase from './components/showcase'
import Icons from './components/icons'
import Profiles from './components/profiles'
import Icons2 from './components/icons2'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top/>
      <Navbar/>
      <Showcase/>
      <Icons/>
      <Profiles/>
      <Icons2/>
      <Footer/>
    </>
  )
}

export default App
