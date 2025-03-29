import FirstMain from "./components/FirstMain"
import Form from "./components/Form"
import { Navbar } from "./components/Navbar"
import RecentsWork from "./components/RecentsWork"
import Testimonials from "./components/Testimonials"
import Workit from "./components/Workit"


function App() {
 

  return (
    <>
    <main>
      <Navbar/>
      <FirstMain/>
      <Workit/>
      <Testimonials/>
      <RecentsWork/>
      <Form/>
    </main>
    </>
  )
}

export default App
